import { io } from "socket.io-client";
import axios from 'axios';

const URL = axios.defaults.baseURL;
const socket = io(URL, { transports: ['websocket'], autoConnect: false });


export default socket;