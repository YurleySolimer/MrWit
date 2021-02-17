import React, { useState } from 'react';
import { connect } from 'react-redux';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';
import '../assets/styles/containers/Call.scss';

import Modal from '../portals/Modal';
import HangUpModal from '../portals/HangUpModal';
import RechargeModal from '../portals/RechargeModal';
import CancelRecharge from '../portals/CancelRecharge';
import FinishedCall from '../portals/FinishedCall';

import sample from '../assets/static/video/sample.mp4';
import audio from '../assets/static/icons/audio.svg';
import camera from '../assets/static/icons/camera.svg';
import cameraDark from '../assets/static/icons/camera_dark.svg';
import hangup from '../assets/static/icons/hangup.svg';
import wallet from '../assets/static/icons/wallet.svg';
import chat from '../assets/static/icons/chat.svg';
import down from '../assets/static/icons/arrowdown.svg';
import clip from '../assets/static/icons/clip.svg';
import send from '../assets/static/icons/send.svg';

const Call = (props) => {

  console.log(props);
  const [isOpen, setIsOpen] = useState(false);
  const [isRecharge, setIsRecharge] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

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
    <div className='call'>
      <div className='call__view'>
        <video src={sample} className='call__view__video' autoPlay loop />
        <div className='call__view__controls'>
          <div className='call__controls__top'>
            <small className='call__duration'>
              Duración: 00:30:14
            </small>
          </div>
          <div className='call__controls__bottom'>
            <button type='button' onClick={handleFinish} aria-label='Activar/desactivar audio' className='call__controls'><img src={audio} alt='audio icon' /></button>
            <button type='button' aria-label='Activar/desactivar cámara' className='call__controls'><img src={camera} alt='camera icon' /></button>
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
            <div className='message__in'>
              <span className='message__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione, velit voluptas possimus aperiam, quas consequuntur eligendi fugiat veniam fuga labore dolore consectetur beatae, eaque quae excepturi ad itaque asperiores?</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__out'>
              <span className='message__body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus voluptatem sed necessitatibus error ullam architecto reprehenderit eveniet aperiam accusantium minima veritatis ab nemo, harum officia consectetur nobis dignissimos est.</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__in'>
              <span className='message__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione, velit voluptas possimus aperiam, quas consequuntur eligendi fugiat veniam fuga labore dolore consectetur beatae, eaque quae excepturi ad itaque asperiores?</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__out'>
              <span className='message__body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus voluptatem sed necessitatibus error ullam architecto reprehenderit eveniet aperiam accusantium minima veritatis ab nemo, harum officia consectetur nobis dignissimos est.</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__in'>
              <span className='message__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione, velit voluptas possimus aperiam, quas consequuntur eligendi fugiat veniam fuga labore dolore consectetur beatae, eaque quae excepturi ad itaque asperiores?</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__out'>
              <span className='message__body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus voluptatem sed necessitatibus error ullam architecto reprehenderit eveniet aperiam accusantium minima veritatis ab nemo, harum officia consectetur nobis dignissimos est.</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__in'>
              <span className='message__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione, velit voluptas possimus aperiam, quas consequuntur eligendi fugiat veniam fuga labore dolore consectetur beatae, eaque quae excepturi ad itaque asperiores?</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__out'>
              <span className='message__body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus voluptatem sed necessitatibus error ullam architecto reprehenderit eveniet aperiam accusantium minima veritatis ab nemo, harum officia consectetur nobis dignissimos est.</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__in'>
              <span className='message__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione, velit voluptas possimus aperiam, quas consequuntur eligendi fugiat veniam fuga labore dolore consectetur beatae, eaque quae excepturi ad itaque asperiores?</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__out'>
              <span className='message__body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus voluptatem sed necessitatibus error ullam architecto reprehenderit eveniet aperiam accusantium minima veritatis ab nemo, harum officia consectetur nobis dignissimos est.</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__in'>
              <span className='message__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione, velit voluptas possimus aperiam, quas consequuntur eligendi fugiat veniam fuga labore dolore consectetur beatae, eaque quae excepturi ad itaque asperiores?</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__out'>
              <span className='message__body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus voluptatem sed necessitatibus error ullam architecto reprehenderit eveniet aperiam accusantium minima veritatis ab nemo, harum officia consectetur nobis dignissimos est.</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__in'>
              <span className='message__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione, velit voluptas possimus aperiam, quas consequuntur eligendi fugiat veniam fuga labore dolore consectetur beatae, eaque quae excepturi ad itaque asperiores?</span>
              <span className='message__timer'>some hour</span>
            </div>
            <div className='message__out'>
              <span className='message__body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus voluptatem sed necessitatibus error ullam architecto reprehenderit eveniet aperiam accusantium minima veritatis ab nemo, harum officia consectetur nobis dignissimos est.</span>
              <span className='message__timer'>some hour</span>
            </div>
          </div>
          <div className='space__footer'>{' '}</div>
          <div className='chat__footer'>
            <div className='chat__footer__input'>
              <input type='text' name='message' placeholder='Nuevo mensaje...' id='message' className='chat__input__message' />
              <button type='button' className='button__chat__input' aria-label='button attachment'>
                <img src={clip} alt='attach' />
              </button>
              <button type='button' className='button__chat__input' aria-label='button send'>
                <img src={send} alt='send' />
              </button>
            </div>
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
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(Call);
