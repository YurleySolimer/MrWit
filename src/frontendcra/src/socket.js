import { io } from "socket.io-client";
import axios from 'axios';

const URL =  window.location.hostname === 'app.mrwit.co' ? 'https://app.mrwit.co/sockets' : 'http://localhost:4000';

const socket = io(URL, { 
    autoConnect: false,
    withCredentials: true,
    transports: ["websocket", "polling"]
});


export default socket;