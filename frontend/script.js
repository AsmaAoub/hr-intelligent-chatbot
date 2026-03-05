async function sendMessage(){

let message = document.getElementById("message").value;

let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += "<p class='user'><b>Vous:</b> " + message + "</p>";

let response = await fetch("http://127.0.0.1:5000/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
message: message
})

});

let data = await response.json();

chatbox.innerHTML += "<p class='bot'><b>Bot:</b> " + data.response + "</p>";

document.getElementById("message").value="";

}
