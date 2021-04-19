import { io } from "socket.io-client";
import axios from 'axios';

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://mrwit.co/socket/' || 'http://localhost:4000' ;

const socket = io(URL, { 
    autoConnect: false,
    withCredentials: true,
});


export default socket;