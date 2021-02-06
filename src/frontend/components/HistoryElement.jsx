import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/HistoryElement.scss';
import profile from '../assets/static/images/profile_1.jpg';
import star from '../assets/static/icons/star.svg';
// import empty from '../assets/static/icons/emptyStar.svg';

const HistoryElement = (props) => {

  //   // eslint-disable-next-line class-methods-use-this
  //   handleStars(score) {
  //     if (score === 5) {
  //       for (let i = 0; i < score; i++) {
  //         const img = document.createElement('img');
  //         img.src = star;
  //         img.alt = `Este consultor tiene ${score} estrellas`;
  //         document.getElementById('scoreDiv').appendChild(img);
  //       }
  //     } else {
  //       for (let i = 0; i < score; i++) {
  //         const img = document.createElement('img');
  //         img.src = star;
  //         img.alt = `Este consultor tiene ${score} estrellas`;
  //         scoreDiv.appendChild(img);
  //       }
  //       const waste = 5 - score;
  //       for (let i = 0; i < waste; i++) {
  //         const img = document.createElement('img');
  //         img.src = empty;
  //         img.alt = `Este consultor tiene ${score} estrellas`;
  //         scoreDiv.appendChild(img);
  //       }
  //     }
  //   }
  const { name, duration, price, date, user, isSearch } = props;

  if (user === 'client' && !isSearch) {
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
          <div className={`HistoryElement__consultancy__price ${user}`}>-{price} COP</div>
          <br />
          <div className='HistoryElement__consultancy__date'>{date}</div>
        </div>
      </div>
    );
  };

  if (user === 'client' && isSearch) {
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
          <div className={`HistoryElement__consultancy__price ${user}`}>{price} COP</div>
          <div className='HistoryElement__consultancy__date'>{date}</div>
          <div className='HistoryElement__consultant__duration'>{duration}</div>
          <br />
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isSearch: state.isSearch,
  };
};

export default connect(mapStateToProps, null)(HistoryElement);
