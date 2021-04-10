import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/portals/Calling.scss';
import { connect } from 'react-redux';
import Peer from 'simple-peer';
import '../videollamada/App.css';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as actionsStatus from '../actions';
import socket from '../socket';
import phone from '../assets/static/icons/phone.svg';

const CallingModal = (props) => {

  const history = useHistory();
  const { onClose, statusData, consultantData, isCall, setIsCall } = props;
  const { consultant } = consultantData;
  const { user } = statusData;

  const idToCall = consultant.socket.socketID;

  const [me, setMe] = useState('');
  const [stream, setStream] = useState();
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [name, setName] = useState('');
  const [idRoom, setIdRoom] = useState('');
  const [call, setCall] = useState(false);
  const [calling, setCalling] = useState(false);
  const [dontAnswered, setDontAnswered] = useState(false);

  const connectionRef = useRef();
  
    useEffect(() => {
     var iDSock =  socket.on('me', (id) => {
      console.log('Hola');
      console.log(id);
      setMe(id);
    });
    console.log('i', iDSock.id)
    setMe(iDSock.id);

  }, [me]);


  const callUser = (idToCall) => {
    setCalling(true);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });
    peer.on('signal', (data) => {
      console.log('me call', me)
      socket.emit('callUser', {
        userToCall: idToCall,
        signalData: data,
        from: me,
        name: user.name,
      });
    });

    socket.on('callAccepted', (signal, idRoom) => {
      console.log('Acepta')
      setCall(true);
      peer.signal(signal);
      setIdRoom(idRoom);
      console.log('El id en callAccepted es ', idRoom);
      history.push(`/join/${idRoom}`);
    });

    connectionRef.current = peer;
  };

  function handleCloseModal(e) {
    onClose(e);
  }

  if (call) {
    return (
      <div className='CallingModal'>
        <img id='callingImage' className='CallingModal__icon' src={phone} alt='' />
        <p className='CallingModal__text'>{`Estás siendo redirigido a la llamada`}</p>
      </div>
    );
  }

  if (!call && !dontAnswered && !calling) {
    return (
      <div className='CallingModal'>
        <img id='callingImage' className='CallingModal__icon' src={phone} alt='' />
        <p className='CallingModal__text'>{`Vas a llamar a ${consultant.name} ${consultant.lastname}, ¿Estás seguro?`}</p>
        <div className="callingButtons">
          <button type='button' onClick={handleCloseModal} className='CallingModal__button back'>Volver</button>
          <button type='button' onClick={() => callUser(idToCall)} className='CallingModal__button call'>LLamar</button>
        </div>
      </div>
    );
  }

  if (!call && !dontAnswered && calling) {
    return (
      <div className='CallingModal'>
        <img id='callingImage' className='CallingModal__icon active' src={phone} alt='' />
        <p className='CallingModal__text'>{`Llamando a ${consultant.name} ${consultant.lastname}`}</p>
        <div className="callingButtons">
          <button type='button' onClick={handleCloseModal} className='CallingModal__button back'>Colgar</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    consultantData: state.mrwitReducers,
    statusData: state.statusReducers,
  };
};

export default connect(mapStateToProps, actionsStatus)(CallingModal);
