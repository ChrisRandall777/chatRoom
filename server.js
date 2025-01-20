// const http = require("http")
// const express = require("express")
// const socketio = require("socket.io")
//import 
//import express from "express";
//import socketio from "socket.io";
const io = require('socket.io')(3000)

// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);


io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
    console.log('new client')
    
    socket.on('sending-message', message => {
        socket.broadcast.emit('new-message', message)
    })
})

//server.listen(3000);
