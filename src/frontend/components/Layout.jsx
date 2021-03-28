import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Menu from './Menu';
import statusReducers from '../reducers/statusReducers';
import Modal from '../portals/Modal';

const Layout = ({ children, user }) => {

  const [isOpenClient, setIsOpenClient] = useState(false);
  const [isOpenConsultant, setIsOpenConsultant] = useState(false);

  if (user.status) {
    if (user.status.inCall) {
      return (
        <div className='App'>
          {children}
        </div>
      );
    };

    const handleCloseClient = () => {
      setIsOpenClient(false);
    }

    const handleCloseConsultant = () => {
      setIsOpenConsultant(false);
    }

    if (user.status.online && user.rol.name === 'client') {
      return (
        <div className='App'>
          <Header />
          {children}
          <Menu />
          <Modal isOpen={isOpenClient} onClose={handleCloseClient}>
            {/* <NotificationClient /> */}
          </Modal>
        </div>
      );
    }

    if (user.status.online && user.rol.name === 'consultant') {
      return (
        <div className='App'>
          <Header />
          {children}
          <Menu />
          <Modal isOpen={isOpenConsultant} onClose={handleCloseConsultant}>
            {/* <NotificationConsultant /> */}
          </Modal>
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
