import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Menu from './Menu';
import statusReducers from '../reducers/statusReducers';

const Layout = ({ children, isOnline, isSearch, isCall }) => {

  if (!isOnline || isSearch || isCall) {

    return (
      <div className='App'>
        {children}
      </div>
    );
  };

  if (isOnline) {
    return (
      <div className='App'>
        <Header />
        {children}
        <Menu />
      </div>
    );

  }
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(Layout);
