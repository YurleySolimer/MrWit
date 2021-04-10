import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIcon from '@material-ui/icons/Phone';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Peer from 'simple-peer';
import '../videollamada/App.css';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../portals/Modal';
import Menu from './Menu';
import Header from './Header';
import * as actionsStatus from '../actions';
import socket from '../socket';

const Layout = ({ children, user, getCall, gettingCall }) => {

  const [isOpenClient, setIsOpenClient] = useState(false);

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
      console.log('caller1', data.from)
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
      console.log('caller', caller)
      socket.emit('answerCall', { signal: data, to: caller, idRoom });
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;

    console.log('El id en answerCall es ', idRoom);
    history.push(`/join/${idRoom}`);
  };

  if (user.status && user.status.isCall) {
    return (
      <div className='App'>
        {children}
      </div>
    );
  };

  if (user.status && user.status.online && user.rol.name === 'consultant') {
    return (
      <div className='App'>
        <Header />
        {children}
        <Menu />
        <div>
          {receivingCall ? (
            <div className='caller'>
              <Button variant='contained' color='primary' onClick={answerCall}>
                <h1>
                  {name}
                  {' '}
                  is calling...
                </h1>
                Answer
              </Button>
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
        <Modal isOpen={isOpenClient} onClose={handleCloseClient}>
          {/* <NotificationClient /> */}
        </Modal>
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
