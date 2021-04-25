import React, { Component } from 'react';
import prev from '../assets/static/icons/prev.svg';

class Prev extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <img src={prev} alt='Mes anterior' />
    );
  }
}

export default Prev;
