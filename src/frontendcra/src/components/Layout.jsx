import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import '../assets/styles/portals/Modal.scss';
import Peer from 'simple-peer';
import '../videollamada/App.css';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Menu from './Menu';
import Header from './Header';
import * as actionsStatus from '../actions';
import socket from '../socket';
import close from '../assets/static/icons/closeDark.svg';
import phone from '../assets/static/icons/phone.svg';
import '../assets/styles/portals/Calling.scss';

const Layout = ({ children, user, setIsCall, isCall }) => {

  const [isOpenClient, setIsOpenClient] = useState(false);
  const [isOpenConsultant, setIsOpenConsultant] = useState(false);

  const history = useHistory();
  const [me, setMe] = useState('');
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState('');
  const [name, setName] = useState('');
  const [idRoom, setIdRoom] = useState('');

  const connectionRef = useRef();

  const handleCloseClient = () => {
    setIsOpenClient(false);
  };

  const handleCloseConsultant = () => {
    setIsOpenConsultant(false);
  };

  useEffect(() => {

    socket.on('callUser', (data) => {
      console.log('caller1', data.from);
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
      setIdRoom(uuidv4());

    });
  }, []);

  const answerCall = () => {

    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });
    peer.on('signal', (data) => {
      console.log('caller', caller);
      socket.emit('answerCall', { signal: data, to: caller, idRoom });
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
    setIsCall(true);
    history.push(`/join/${idRoom}`);
  };

  if (user.status && isCall) {
    return (
      <div className='App'>
        {children}
      </div>
    );
  };

  if (user.status && user.status.logueado && user.rol.name === 'consultant') {
    return (
      <div className='App'>
        <Header />
        {children}
        <Menu />
        <div>
          {receivingCall ? (
            <div className='Modal'>
              <div className='Modal__container'>
                <button onClick={() => setReceivingCall(false)} type='button' className='Modal__close--button'>
                  <img src={close} alt='cierra el popup' />
                </button>
                <div className='CallingModal'>
                  <img id='callingImage' className='CallingModal__icon active' src={phone} alt='' />
                  <p className='CallingModal__text'>{`${name} te está llamando, ¿quieres contestar?`}</p>
                  <div className='callingButtons'>
                    <button type='button' onClick={() => setReceivingCall(false)} className='CallingModal__button back'>Colgar</button>
                    <button type='button' onClick={() => answerCall()} className='CallingModal__button call'>Contestar</button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        {/* <NotificationConsultant /> */}
      </div>
    );
  }

  if (user.name && user.dni && user.rol.name === 'client') {
    console.log('Entré en el layout de client');
    return (
      <div className='App'>
        <Header />
        {children}
        <Menu />
        {/* <Modal isOpen={isOpenClient} onClose={handleCloseClient}>
          <NotificationClient />
        </Modal> */}
      </div>
    );
  }

  console.log('Entré en el layout de general');
  return (
    <div className='App'>
      {children}
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(Layout);
