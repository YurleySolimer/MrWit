import { io } from "socket.io-client";
import axios from 'axios';

const URL = 'https://mrwit.co/socket/' || 'http:/localhost:4000';
const socket = io(URL, { 
    transports: ['websocket'], 
    autoConnect: false,
    withCredentials: true,
});


export default socket;