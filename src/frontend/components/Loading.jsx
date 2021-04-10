import React from 'react';
import '../assets/styles/components/Loading.scss';
import background from '../assets/static/images/background1.png';

const Loading = () => {
  return (
    <div className='Loading'>
      <img className='background' src={background} alt='background' />
      <svg>
        <g>
          <path d='M 50,100 A 1,1 0 0 1 50,0' />
        </g>
        <g>
          <path d='M 50,75 A 1,1 0 0 0 50,-25' />
        </g>
        <defs>
          <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' style={{ 'stop-color': '#B5143F', 'stop-opacity': '1' }} />
            <stop offset='100%' style={{ 'stop-color': '#00f7ff', 'stop-opacity': '1' }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Loading;
