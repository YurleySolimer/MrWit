import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Menu from './Menu';

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

const mapStateToProps = (state) => {
  return {
    isOnline: state.isOnline,
    isSearch: state.isSearch,
    isCall: state.isCall,
  };
};

export default connect(mapStateToProps, null)(Layout);
