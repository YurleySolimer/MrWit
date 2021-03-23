import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Menu from './Menu';
import statusReducers from '../reducers/statusReducers';

const Layout = ({ children, user }) => {

  if (user.status) {
    if (user.status.inCall) {
      return (
        <div className='App'>
          {children}
        </div>
      );
    };

    if (user.status.online) {
      return (
        <div className='App'>
          <Header />
          {children}
          <Menu />
        </div>
      );
    }
  }

  return (
    <div className='App'>
      {children}
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(Layout);
