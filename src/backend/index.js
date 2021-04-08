const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const createRoles = require('./libs/initialSetups');
const session = require('express-session');
const multer = require('multer');
const passport = require('passport');


require('dotenv').config();
require('./database');
require('./routes/auth-google');

const app = express();


createRoles();

const server = require("http").Server(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "*" ,
		methods: [ "GET", "POST" ],
	}
})


//Settings
app.set('port', process.env.PORT || 3000);

//Socket

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
		io.to(data.to).emit("callAccepted", data.signal)
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



//Middelwares
app.use(cors());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,');
    res.header('content-type: application/json; charset=utf-8')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next()
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET' 
  }));

//Static Files
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/images')));

//Passport setting
app.use(passport.initialize());
app.use(passport.session());



//Multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'images/uploads'),
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
});
  
app.use(multer({
    storage,
    dest: path.join(__dirname, 'images/uploads')
  }).array('picture')
);


//Routes
app.use(require('./routes/consultor'));
app.use(require('./routes/admin'));
app.use(require('./routes/mrwit'));
app.use(require('./routes/index'));
app.use(require('./routes/blog'));
app.use(require('./routes/auth'));
app.use(require('./routes/auth-google'));




//Listening Port
server.listen(app.get('port'));
console.log(`server on port ${app.get('port')}`);

module.exports = app;