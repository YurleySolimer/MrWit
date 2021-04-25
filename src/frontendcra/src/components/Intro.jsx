import React from 'react';
import '../assets/styles/components/Intro.scss';
import background from '../assets/static/images/background1.png';

const Intro = () => {

  return (
    <div className='intro'>
      <img className='background' src={background} alt='img' />
      <svg
        id='logo'
        width='157'
        height='100'
        viewBox='0 0 157 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M155.601 1L132.442 68.7667H128.658L110.441 17.3193L109.496 14.6501L108.555 17.3208L92.2564 63.5925L92.1412 63.9196L92.2533 64.2478L93.7959 68.7667H91.1416H85.9812L74.2328 32.5123L74.2306 32.5053L74.2282 32.4983L69.5258 18.6848L68.6213 16.0278L67.642 18.6581L48.9858 68.7667H46.1187L27.816 18.3543L26.8308 15.6406L25.9264 18.3823L9.30601 68.7667H1.40217L24.7474 1H28.6276L46.7494 52.4396L47.6901 55.1099L48.6352 52.4411L66.8519 1H70.6296L87.7995 51.223L88.7175 53.908L89.6858 51.2407L107.925 1H110.792L129.569 51.4201L130.572 54.1118L131.457 51.3796L147.793 1H155.601Z'
          stroke='url(#paint0_linear)'
          strokeWidth='1'
        />
        <path
          id='pathFilled'
          d='M155.601 1L132.442 68.7667H128.658L110.441 17.3193L109.496 14.6501L108.555 17.3208L92.2564 63.5925L92.1412 63.9196L92.2533 64.2478L93.7959 68.7667H91.1416H85.9812L74.2328 32.5123L74.2306 32.5053L74.2282 32.4983L69.5258 18.6848L68.6213 16.0278L67.642 18.6581L48.9858 68.7667H46.1187L27.816 18.3543L26.8308 15.6406L25.9264 18.3823L9.30601 68.7667H1.40217L24.7474 1H28.6276L46.7494 52.4396L47.6901 55.1099L48.6352 52.4411L66.8519 1H70.6296L87.7995 51.223L88.7175 53.908L89.6858 51.2407L107.925 1H110.792L129.569 51.4201L130.572 54.1118L131.457 51.3796L147.793 1H155.601Z'
          stroke='url(#paint0_linear)'
          fill='url(#paint0_linear)'
          strokeWidth='1'
        />
        <defs>
          <linearGradient id='paint0_linear' x1='0' y1='34.8802' x2='157' y2='34.8802' gradientUnits='userSpaceOnUse'>
            <stop stopColor='var(--color-stop0)' />
            <stop offset='0.12' stopColor='var(--color-stop1)' />
            <stop offset='0.29' stopColor='var(--color-stop2)' />
            <stop offset='0.45' stopColor='var(--color-stop3)' />
            <stop offset='0.61' stopColor='var(--color-stop4)' />
            <stop offset='0.75' stopColor='var(--color-stop5)' />
            <stop offset='0.88' stopColor='var(--color-stop6)' />
            <stop offset='0.99' stopColor='var(--color-stop7)' />
          </linearGradient>
        </defs>
      </svg>
      <svg
        id='logo2'
        width='157'
        height='100'
        viewBox='0 0 157 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M43.7419 90.3002L54.6736 74.1636H55.5715V98.9407H53.0925V82.0356V80.4162L52.1795 81.7537L43.4462 94.5481H43.0695L34.3362 81.7537L33.4232 80.4162V82.0356V98.9407H30.9634V74.1636H31.8754L42.9153 90.3021L43.33 90.9083L43.7419 90.3002Z'
          stroke='#FFDB00'
        />
        <path
          d='M58.2026 98.9389V81.2325H60.3885V83.485L61.3425 83.6946C61.7695 82.7696 62.4651 81.9937 63.3394 81.4672C64.2136 80.9408 65.2263 80.6882 66.2462 80.7423L66.2576 80.7429L66.2691 80.743C66.8296 80.747 67.3882 80.8042 67.9373 80.9137L67.7242 83.1271C67.2263 83.0146 66.7171 82.9562 66.2054 82.9532V82.9532H66.2026C64.598 82.9532 63.1708 83.5115 62.1495 84.6469C61.1328 85.7771 60.5669 87.4248 60.5669 89.5177V98.9299L58.2026 98.9389Z'
          stroke='#FFDB00'
        />
        <path
          d='M67.6905 97.7319L67.6905 97.7502L67.6919 97.7684C67.7099 98.0059 67.6786 98.2446 67.5998 98.4695C67.5211 98.6944 67.3966 98.9008 67.2341 99.0756C67.0716 99.2504 66.8746 99.39 66.6554 99.4854C66.4362 99.5809 66.1996 99.6302 65.9604 99.6302C65.7211 99.6302 65.4845 99.5809 65.2653 99.4854C65.0461 99.39 64.8491 99.2504 64.6866 99.0756C64.5241 98.9008 64.3997 98.6944 64.3209 98.4695C64.2422 98.2446 64.2108 98.0059 64.2288 97.7684L64.2303 97.7495L64.2302 97.7305C64.2302 97.5087 64.2746 97.2891 64.361 97.0847C64.4474 96.8803 64.574 96.6952 64.7334 96.5403C64.8928 96.3854 65.0817 96.2638 65.2891 96.1829C65.4965 96.1019 65.7181 96.0632 65.9408 96.0691L65.954 95.5693L65.9686 96.0691C66.1921 96.0625 66.4147 96.1007 66.6231 96.1814C66.8315 96.2621 67.0215 96.3835 67.182 96.5386C67.3424 96.6937 67.47 96.8791 67.5574 97.0841C67.6447 97.289 67.6899 97.5093 67.6905 97.7319Z'
          stroke='#FFDB00'
        />
      </svg>
      <svg
        id='logo3'
        width='157'
        height='100'
        viewBox='0 0 157 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M77.3098 95.2995L84.6042 74.0808H84.8354L92.237 95.2701L92.7274 96.674L93.1848 95.259L100.031 74.0808H101.109L92.896 98.8579H92.5624L85.2171 77.4993L84.7425 76.1191L84.2711 77.5004L76.9827 98.8579H76.6551L68.3502 74.0808H69.4648L76.3615 95.2916L76.8238 96.7134L77.3098 95.2995Z'
          stroke='#7C7C7B'
        />
        <path
          d='M104.908 75.1402L104.908 75.1402L104.908 75.133C104.905 74.8764 104.978 74.6246 105.119 74.4095C105.26 74.1944 105.462 74.0256 105.699 73.9247C105.936 73.8237 106.198 73.7952 106.452 73.8427C106.705 73.8902 106.939 74.0117 107.123 74.1915C107.307 74.3713 107.433 74.6014 107.486 74.8526C107.539 75.1038 107.516 75.365 107.42 75.6033C107.324 75.8415 107.159 76.0462 106.947 76.1913C106.734 76.3365 106.483 76.4155 106.225 76.4182L106.225 76.4182L106.217 76.4184C106.046 76.4226 105.876 76.3927 105.717 76.3302C105.558 76.2677 105.413 76.1741 105.291 76.0548C105.169 75.9356 105.072 75.7932 105.006 75.6361C104.94 75.479 104.907 75.3104 104.908 75.1402ZM106.73 81.1942L106.705 98.858H105.634V81.1942H106.73Z'
          stroke='#7C7C7B'
        />
        <path
          d='M119.792 98.3831C121.122 98.4021 122.424 98.0355 123.544 97.3338L123.934 98.0317C122.673 98.8901 121.167 99.3288 119.633 99.2777L119.625 99.2775H119.617C117.862 99.2775 116.609 98.71 115.784 97.7256C114.947 96.7268 114.491 95.2275 114.491 93.2553V82.544V82.044H113.991H111.171V81.1941H114.054H114.554V80.6941V74.6021H115.619V80.6941V81.1941H116.119H123.316V82.044H116.087H115.587V82.544V93.3507C115.587 94.9207 115.901 96.1889 116.622 97.0704C117.358 97.9709 118.446 98.3824 119.792 98.3831Z'
          stroke='#7C7C7B'
        />

      </svg>
    </div>
  );
};

export default Intro;
