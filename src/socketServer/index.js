const express = require('express');

require('dotenv').config();

const app = express();
const server = require("http").Server(app);


//Socket
const io = require("socket.io")(server, {
	cors: {
		origin: ["https://mrwit.co", "http://localhost:8080", "https://localhost:8080", "*" ]   ,
		methods: [ "GET", "POST" ],
        credentials: true,
        allowedHeaders: ["Content-Type", "Accept"],
        transports: ['websocket', 'polling'],
    },
    allowEIO3: true

})

const users = {};
const socketToRoom = {};

io.on('connection', socket => {
    socket.emit("me", socket.id)
    socket.on("join room", roomID => {
        if (users[roomID]) {
            const length = users[roomID].length;
            if (length === 2) {
                socket.emit("Esta llamada está ocupada");
                return;
            }
            users[roomID].push(socket.id);
        } else {
            users[roomID] = [socket.id];
        }
        socketToRoom[socket.id] = roomID;
        const usersInThisRoom = users[roomID].filter(id => id !== socket.id);

        socket.emit("all users", usersInThisRoom);
        socket.emit("your id", socket.id);
        socket.on("send message", body => {
            io.emit("message", body);
        })
    });

    socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal, data.idRoom)
	})

    socket.on("sending signal", payload => {
        io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
    });

    socket.on("returning signal", payload => {
        io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
    });

    socket.on('disconnect', () => {
        const roomID = socketToRoom[socket.id];
        let room = users[roomID];
        if (room) {
            room = room.filter(id => id !== socket.id);
            users[roomID] = room;
        }
        socket.broadcast.emit("callEnded")

    });   

});




//Routes
app.get('/', (req, res) => {
    res.send('Welcome to sockets in MrWit');
})
   

//SOCKET SERVER
server.listen(4000, function() {
    console.log('socket server on : 4000');
 });;


module.exports = app;