import React from 'react';
import '../assets/styles/containers/Call.scss';
import sample from '../assets/static/video/sample.mp4';
import audio from '../assets/static/icons/audio.svg';
import camera from '../assets/static/icons/camera.svg';
import hangup from '../assets/static/icons/hangup.svg';
import chat from '../assets/static/icons/chat.svg';
import up from '../assets/static/icons/arrowup.svg';
import down from '../assets/static/icons/arrowdown.svg';

const Call = () => {
  // class Call extends React.Component {

  //   constructor(props) {
  //     super(props);
  //     this.state = {};

  //     this.handleChat = this.handleChat.bind(this);
  //   }

  //   handleChat() {
  //     if (chatActive) {
  //       console.log('something for build');
  //     }
  //   }

  //   render() {
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
            <button type='button' aria-label='audio' className='call__controls__audio'><img src={audio} alt='' /></button>
            <button type='button' aria-label='camera' className='call__controls__camera'><img src={camera} alt='' /></button>
            <button type='button' aria-label='hangup' className='call__controls__hangup'><img src={hangup} alt='' /></button>
            <div className='call__controls__recharge'>
              <small className='call__controls__recharge__info'>
                Restante: 00:29:46
              </small>
              <button type='button' aria-label='recharge' className='call__controls__recharge__button'>Recargar</button>
            </div>
          </div>
        </div>
      </div>
      <div className='call__chat'>
        <div className="chat__header__icon">
          <button type='button' aria-label='toggle chat' className='chat__toggle'>
            <img src={chat} alt="" id='chat' className='chat__toggle__icon' />
            <img src={camera} alt="" id='camera' className='chat__toggle__icon' />
          </button>
          <div className='toggle__arrow'>
            <img src={up} alt="" id='up' className="arrow__toggle" />
            <img src={down} alt="" id='down' className="arrow__toggle" />
          </div>
        </div>
      </div>
    </div>
  );
};
// }

export default Call;
