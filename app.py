import os
from flask import Flask, request, jsonify
from openai import OpenAI
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# clé API OpenAI
client = OpenAI(api_key="YOUR_API_KEY")

@app.route("/chat", methods=["POST"])
def chat():

    user_message = request.json["message"]

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are an HR assistant helping employees."},
            {"role": "user", "content": user_message}
        ]
    )

    reply = response.choices[0].message.content

    return jsonify({"response": reply})


if __name__ == "__main__":
    app.run(debug=True)
