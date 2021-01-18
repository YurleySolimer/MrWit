import React from 'react';
import '../assets/styles/components/HistoryElement.scss';
import profile from '../assets/static/images/profile_1.jpg';
import star from '../assets/static/icons/star.svg';
import empty from '../assets/static/icons/emptyStar.svg';

class HistoryElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

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

  render() {

    const { name, duration, price, score, date } = this.props;

    return (
      <div className='HistoryElement'>
        <div className='HistoryElement__img'>
          <img src={profile} alt='' className='HistoryElement__img__profile' />
        </div>
        <div className='HistoryElement__consultant'>
          <div className='HistoryElement__consultant__name'>{name}</div>
          <div className='HistoryElement__consultant__duration'>{duration}</div>
          <div id='scoreDiv' className='HistoryElement__consultant__score'>
            {score}
          </div>
        </div>
        <div className='HistoryElement__consultancy'>
          <div className='HistoryElement__consultancy__price'>-{price} COP</div>
          <br />
          <div className='HistoryElement__consultancy__date'>{date}</div>
        </div>
      </div>
    );
  };
}
export default HistoryElement;
