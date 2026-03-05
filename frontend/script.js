async function sendMessage(){

let message=document.getElementById("message").value

let chatbox=document.getElementById("chatbox")

chatbox.innerHTML+="<p><b>You:</b> "+message+"</p>"

let response=await fetch("http://127.0.0.1:5000/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
message:message
})

})

let data=await response.json()

chatbox.innerHTML+="<p><b>Bot:</b> "+data.response+"</p>"

}
