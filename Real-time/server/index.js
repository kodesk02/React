const express = require('express');
const app = express();
 http = require('http');
const cors = require('cors');
const { Server } = require('socket.io'); //when client connect to server via socket.io-client


app.use(cors());  //cors middleware

const server = http.createServer(app);

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST method .
const io = new Server(server ,{
    cors:{
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

// How to send message to the users in a room 
const CHAT_BOT  ='ChatBot'; 
let chatRoom = '';//E.g node , express
let allUsers = [];// All users in the current chat room   


// Listen for when the client connect via socket.io-client 
io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    // Add a user to a room and
    socket.on('join_room', (data) => {
        const { username, room } = data; //Data sent from client when join_room emitted
        socket.join(room); // Join the user to a socket room 

        let __createdtime__ = Date.now(); //Current time 
        // Send message to all users currently in the room, apart from the ones that currently joined
        socket.to(room).emit('receive message' ,{
            message: `${username} has joined the chat`,
            username: CHAT_BOT,
            __createdtime__ , 
        });
        socket.emit('receive_message',{
            message: `Welcome ${username}`,
            username: CHAT_BOT,
            __createdtime__ , 
        });
        chatRoom= room ;
        allUsers.push({ id: socket.id, username, room });
        chatRoomUsers = allUsers.filter((user) => user.room === room);
        socket.to(room).emit('chatroom_users', chatRoomUsers);
        socket.emit('chatroom_users', chatRoomUsers); 
    });
});



server.listen(4000, () => 'Server is running on port 3000');