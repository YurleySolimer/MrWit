import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone"
import React, { useEffect, useRef, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Peer from "simple-peer"
import io from "socket.io-client"
import "./App.css"
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const socket = io.connect('http://localhost:3000')
function App() {
    const history = useHistory();

	const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ name, setName ] = useState("")
    const [ idRoom, setIdRoom ] = useState("")

	const connectionRef= useRef()

	useEffect(() => {
	    socket.on("me", (id) => {
			setMe(id)
		})

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
	}, [])

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
            history.push(`/join/${idRoom}`);            
		})

		connectionRef.current = peer
	}

	const answerCall =() =>  {
		setCallAccepted(true)
        console.log(uuidv4())
        setIdRoom(uuidv4()); 

		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})		

		peer.signal(callerSignal);
		connectionRef.current = peer;        
        
        console.log(idRoom)            
        history.push(`/join/${idRoom}`);

	}



	return (
		<>
			<h1 style={{ textAlign: "center", color: '#fff' }}>MR WIT CALL</h1>
		<div className="container">
			
			<div className="myId">
				<TextField
					id="filled-basic"
					label="Name"
					variant="filled"
					onChange={(e) => setName(e.target.value)}
					style={{ marginBottom: "20px" }}
				/>
				<CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
					<Button variant="contained" color="primary" startIcon={<AssignmentIcon fontSize="large" />}>
						Copy ID
					</Button>
				</CopyToClipboard>

				<TextField
					id="filled-basic"
					label="ID to call"
					variant="filled"
					value={idToCall}
					onChange={(e) => setIdToCall(e.target.value)}
				/>
				<div className="call-button">
					{callAccepted  ? (
						<h1> In Call </h1>
					) : (
						<IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
							<PhoneIcon fontSize="large" />
						</IconButton>
					)}
					{idToCall}
				</div>
			</div>
			<div>
				{receivingCall ? (
						<div className="caller">
						<Button variant="contained" color="primary" onClick={answerCall}>
                        <h1 >{name} is calling...</h1>
							Answer
						</Button>
					</div>
				) : null}
			</div>
		</div>
		</>
	)
}

export default App
