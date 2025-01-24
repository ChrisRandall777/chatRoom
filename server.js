import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

/**
// const http = require("http")
// const express = require("express")
// const socketio = require("socket.io")
//import 
//import express from "express";
//import socketio from "socket.io";

// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);

// var http = require('http')
// var server = http.createServer()
// const io = require('socket.io')(server)
// server.listen(3000)

// var express = require("express")
// var http = require('http');
// var app = express();
// var server = http.createServer(app);
// var io = require('socket.io')(server);
// server.listen(3000, 'http://192.168.154.1');

const io = require('socket.io')(3000)

io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
    console.log('new client')
    
    socket.on('sending-message', message => {
        socket.broadcast.emit('new-message', message)
    })
})

//server.listen(3000);
**/
