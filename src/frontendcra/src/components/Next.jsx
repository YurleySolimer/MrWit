import React from 'react';
import next from '../assets/static/icons/next.svg';

class Next extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <img src={next} alt='Siguiente mes' />
    );
  }
}

export default Next;
