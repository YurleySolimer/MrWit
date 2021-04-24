import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import moment from "moment";
import axios from 'axios';

import '../assets/styles/containers/Call.scss';

import Modal from '../portals/Modal';
import HangUpModal from '../portals/HangUpModal';
import RechargeModal from '../portals/RechargeModal';
import CancelRecharge from '../portals/CancelRecharge';
import FinishedCall from '../portals/FinishedCall';

import audio from '../assets/static/icons/audio.svg';
import camera from '../assets/static/icons/camera.svg';
import cameraDark from '../assets/static/icons/camera_dark.svg';
import hangup from '../assets/static/icons/hangup.svg';
import wallet from '../assets/static/icons/wallet.svg';
import chat from '../assets/static/icons/chat.svg';
import down from '../assets/static/icons/arrowdown.svg';
import clip from '../assets/static/icons/clip.svg';
import send from '../assets/static/icons/send.svg';





const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
`;

const StyledVideo = styled.video`
    height: 30%;
    width: 40%;
	padding: 5px;
`;


const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 85px;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;


const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <StyledVideo playsInline autoPlay ref={ref} />
    );
}


const videoConstraints = {
    height: window.innerHeight,
    width: window.innerWidth
};

const Room = (props) => {
    const [peers, setPeers] = useState([]);
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const roomID = window.location.pathname.split('/')[2];

	const [isOpen, setIsOpen] = useState(false);
	const [isRecharge, setIsRecharge] = useState(false);
	const [isCancel, setIsCancel] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const [callEnded, setCallEnded] = useState(false)


	const [messages, setMessages] = useState([]);
  	const [message, setMessage] = useState("");
	const [yourID, setYourID] = useState();

    useEffect(() => {
		const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://mrwit.co/socket/' || 'http://localhost:4000' ;

        socketRef.current = io.connect(URL, { 
			withCredentials: true,
			transports: ["websocket", "polling"]
		});

        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
            userVideo.current.srcObject = stream;
            socketRef.current.emit("join room", roomID);
            socketRef.current.on("all users", users => {
                const peers = [];
                users.forEach(userID => {
                    const peer = createPeer(userID, socketRef.current.id, stream);
                    peersRef.current.push({
                        peerID: userID,
                        peer,
                    })
                    peers.push(peer);
                })
                setPeers(peers);
            })

            socketRef.current.on("user joined", payload => {
                const peer = addPeer(payload.signal, payload.callerID, stream);
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                })

                setPeers(users => [...users, peer]);
            });

            socketRef.current.on("receiving returned signal", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.id);
                item.peer.signal(payload.signal);
            });
        })

		socketRef.current.on("your id", id => {
			setYourID(id);
		  })
	  
		  socketRef.current.on("message", (message) => {
			console.log("here");
			receivedMessage(message);
		  })
		  
    }, []);

    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })

        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        })
        peer.signal(incomingSignal);
        return peer;
    }


	function receivedMessage(message) {
		setMessages(oldMsgs => [...oldMsgs, message]);
	  }
	
	function sendMessage(e) {
		e.preventDefault();
		const messageObject = {
		  body: message,
		  id: yourID,
		  room: roomID,
		  date: new Date(),
		};
		setMessage("");
		socketRef.current.emit("send message", messageObject);
	  }
	
	  function handleChange(e) {
		setMessage(e.target.value);
	  }



	function handleOpenModal(e) {
		setIsOpen(true);
	  };
	
	  function handleCloseModal(newValue) {
		setIsOpen(false);
	  };
	
	  function handleOpenRecharge(e) {
		setIsRecharge(true);
	  }
	
	  function handleCloseRecharge(e) {
		setIsRecharge(false);
	  }
	
	  function handleCancel(e) {
		setIsRecharge(false);
		setIsCancel(true);
	  }
	
	  function handleCancelClose(e) {
		setIsCancel(false);
	  }
	
	  function handleBackRecharge(e) {
		setIsCancel(false);
		setIsRecharge(true);
	  }
	
	  function handleFinish(e) {
		setIsFinished(true);
	  }

	  const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}
	
	  function handleChat() {
		const chatIcon = document.getElementById('chatIcon');
		const arrowIcon = document.getElementById('arrowIcon');
		const headerIcon = document.getElementById('headerIcon');
		const chat = document.getElementById('call__chat');
	
		chatIcon.classList.toggle('active');
		arrowIcon.classList.toggle('active');
		headerIcon.classList.toggle('active');
		chat.classList.toggle('active');
	  }





    return (
        <Container>
		<div className='call'>
		<div className='call__view main__videos'>
		<div id="video-grid">

		<StyledVideo muted ref={userVideo} autoPlay playsInline />
            {peers.map((peer, index) => {
                return (
                    <Video key={index} peer={peer} />
                );
            })}


		</div>
		<div className='call__view__controls'>
			<div className='call__controls__top'>
			<small className='call__duration'>
				Duración: 00:30:14
			</small>
			</div>
			<div className='call__controls__bottom'>
			<button type='button'  aria-label='Activar/desactivar audio' className='call__controls'><img src={audio} alt='audio icon' /></button>
			<button type='button'  aria-label='Activar/desactivar cámara' className='call__controls'><img src={camera} alt='camera icon' /></button>
			<button type='button' onClick={handleOpenModal} aria-label='hangup' className='call__controls__hangup'><img src={hangup} alt='Hangup icon' /></button>
			<button type='button' aria-label='Abrir chat' onClick={handleChat} className='call__controls'><img src={chat} alt='Chat icon' /></button>
			<button type='button' aria-label='recharge' onClick={handleOpenRecharge} className='call__controls recharge'><img src={wallet} alt='recarga icon' /></button>
			</div>
		</div>
		</div>
		<div id='call__chat' className='call__chat'>
		<div className='call__chat__inner'>
			<button id='headerIcon' type='button' onClick={handleChat} aria-label='toggle chat' className='chat__header__icon'>
			<div id='chatIcon' className='chat__toggle'>
				<img src={cameraDark} alt='icon camera' id='camera' className='chat__toggle__icon' />
			</div>
			<div id='arrowIcon' className='toggle__arrow'>
				<img src={down} alt='icon down' id='down' className='arrow__toggle' />
			</div>
			</button>
			<div className='chat__body'> 			
				{messages.map((message, index) => {
					if(message.room == roomID) { 
						const date = message.date
						if (message.id === yourID) {
							return (							
							<MyRow key={index}>
								<div className='message__in'>
									<span className='message__body'> {message.body} </span>
									<span className='message__timer'>{moment(date).format("h:mm:ss a")}</span>

							</div>
							</MyRow>
							)
						}
						return (
							<PartnerRow key={index}>
								<div className='message__out'>
										<span className='message__body'> {message.body} </span>
										<span className='message__timer'>{moment(message.date).format("h:mm:ss a")}</span>
								</div>
							</PartnerRow>
						)
					}
				})}
			</div>
			<div className='space__footer'>{' '}</div>
			<div className='chat__footer'>
				<form onSubmit={sendMessage} className='chat__footer__input'>
					<input type='text' value={message} onChange={handleChange} name='message' placeholder='Nuevo mensaje...' id='message' className='chat__input__message' /> 
					<button type='button' className='button__chat__input' aria-label='button attachment'>
					<img src={clip} alt='attach' />
					</button>
					
					<button type='submit' className='button__chat__input' aria-label='button send'>
					<img src={send} alt='send' />
					</button> 
				</form>
			</div>
		</div>
		</div>
		<Modal noButton={true} onClose={handleCloseModal} isOpen={isOpen}>
		<HangUpModal onClose={handleCloseModal} />
		</Modal>
		<Modal onClose={handleCancel} isOpen={isRecharge}>
		<RechargeModal onClose={handleCloseRecharge} />
		</Modal>
		<Modal isOpen={isCancel} noButton={true}>
		<CancelRecharge onCancel={handleCancelClose} onBack={handleBackRecharge} />
		</Modal>
		<Modal noButton={true} isOpen={isFinished}>
		<FinishedCall />
		</Modal>
		</div>

            
        </Container>
    );
};

export default Room;




