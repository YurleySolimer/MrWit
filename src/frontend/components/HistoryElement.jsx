import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/HistoryElement.scss';
import profile from '../assets/static/images/profile_1.jpg';
import star from '../assets/static/icons/star.svg';
// eslint-disable-next-line no-unused-vars
import statusReducers from '../reducers/statusReducers';
// import empty from '../assets/static/icons/emptyStar.svg';

const HistoryElement = (props) => {
  const { name, duration, price, date, user, search, currency } = props;
  console.log('los props de HistoryElement son', props);
  if (user === 'client' && !search) {
    return (
      <div className='HistoryElement'>
        <div className='HistoryElement__img'>
          <img src={profile} alt='' className='HistoryElement__img__profile' />
        </div>
        <div className='HistoryElement__consultant'>
          <div className='HistoryElement__consultant__name'>{name}</div>
          <div className='HistoryElement__consultant__duration'>{duration}</div>
          <div id='scoreDiv' className='HistoryElement__consultant__score'>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
          </div>
        </div>
        <div className='HistoryElement__consultancy'>
          <div className={`HistoryElement__consultancy__price ${user}`}>-{price} { currency }</div>
          <br />
          <div className='HistoryElement__consultancy__date'>{date}</div>
        </div>
      </div>
    );
  };

  if (user === 'client' && search) {
    return (
      <div className='HistoryElement'>
        <div className='HistoryElement__consultant'>
          <div className='HistoryElement__consultant__name'>{name}</div>
          <div id='scoreDiv' className='HistoryElement__consultant__score'>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
          </div>
          <p className="HistoryElement__consultant__comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate asperiores et voluptates ad placeat cum cupiditate dolorum laboriosam qui porro?</p>
        </div>
        <div className='HistoryElement__consultancy'>
          <div className='HistoryElement__consultancy__date'>{date}</div>
          <div className='HistoryElement__consultant__duration'>{duration}</div>
          <br />
        </div>
      </div>
    );
  };

  if (user === 'consultant') {
    return (
      <div className='HistoryElement'>
        <div className='HistoryElement__consultant'>
          <div className='HistoryElement__consultant__name'>{name}</div>
          <div id='scoreDiv' className='HistoryElement__consultant__score'>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
          </div>
          <div className="HistoryElement__consultant__status">
            <span>Status respecto a favorito</span>
          </div>
        </div>
        <div className='HistoryElement__consultancy'>
          <div className={`HistoryElement__consultancy__price ${user}`}>{price} { currency }</div>
          <div className='HistoryElement__consultancy__date'>{date}</div>
          <div className='HistoryElement__consultant__duration'>{duration}</div>
          <br />
        </div>
      </div>
    );
  };
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(HistoryElement);
