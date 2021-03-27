const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const createRoles = require('./libs/initialSetups');
const session = require('express-session');
const multer = require('multer');

require('dotenv').config();
require('./database');

const app = express();
createRoles();

const server = require("http").Server(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:8080",
		methods: [ "GET", "POST" ]
	}
})
//const { ExpressPeerServer } = require("peer");


//Settings
app.set('port', process.env.PORT || 3000);



// Peer
//const peerServer = ExpressPeerServer(server, {
 // debug: true,
//});

//Socket

const users = {};
const socketToRoom = {};

io.on('connection', socket => {
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
    });   

});





app.set("view engine", "ejs");
app.use(express.static("public"));
//app.use("/peerjs", peerServer);


//Middelwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET' 
  }));


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



//Passport setting

const passport = require('passport');
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, '/public'));
app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

//Google Auth

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '1070484053881-kie1fjjloi981aesbh7538h6h724g1g9.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'ytqTjsY7uS5N4pdmkaG0Cahk';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/');
  });

  server.listen(app.get('port'));
  console.log(`server on port ${app.get('port')}`);

module.exports = app;