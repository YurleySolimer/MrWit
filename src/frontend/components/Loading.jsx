import React from 'react';
import '../assets/styles/components/Loading.scss';

const Loading = () => {
  console.log('I am apearing');
  return (
    <div className='Loading'>
      <svg>
        <g>
          <path d='M 50,100 A 1,1 0 0 1 50,0' />
        </g>
        <g>
          <path d='M 50,75 A 1,1 0 0 0 50,-25' />
        </g>
        <defs>
          <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' style={{ 'stopColor': '#B5143F', 'stopOpacity': '1' }} />
            <stop offset='100%' style={{ 'stopColor': '#00f7ff', 'stopOpacity': '1' }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Loading;
