//const socket = io('http://localhost:3000')
//const socket = io()
const socket = io('http://2601:246:4d80:c080:91b3:bb96:300d:7b0b:3000', { transports : ['websocket'], 
  cors: {
    origin: "https://2601:246:4d80:c080:91b3:bb96:300d:7b0b:3000",
    methods: ["GET", "POST"]
  }
 })

var messageBox = document.getElementById('message')
var messagesDiv = document.getElementById("messages")
var tah = document.getElementById("textarea_holder")

const username = prompt('What is your name?')
appendMessage('Welcome ' + username + ' you\'ve joined the chat:)')

socket.on('new-message', data => {
  appendMessage(data)
})

tah.addEventListener('submit', e => {
  e.preventDefault()
  var message = messageBox.value
  appendMessage(username + ': ' + message)
  socket.emit('sending-message', username + ': ' + message)
  messageBox.value = ''
})

function appendMessage(new_message){
  messagesDiv.innerHTML = messagesDiv.innerHTML + '<p class="mess">' + new_message + '</p>'
  var messages_height = messagesDiv.scrollHeight
  messagesDiv.scrollTo({
    top: messages_height,
    behavior: "smooth",
  });
}