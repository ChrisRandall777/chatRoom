const io = require('socket.io')(3000)

io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
    console.log('new client')
    
    socket.on('sending-message', message => {
        socket.broadcast.emit('new-message', message)
    })
})

