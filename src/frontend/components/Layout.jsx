import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Menu from './Menu';
import Modal from '../portals/Modal';

const Layout = ({ children, user }) => {

  const [isOpenClient, setIsOpenClient] = useState(false);
  const [isOpenConsultant, setIsOpenConsultant] = useState(false);

  const handleCloseClient = () => {
    setIsOpenClient(false);
  };

  const handleCloseConsultant = () => {
    setIsOpenConsultant(false);
  };

  if (user.status && user.status.isCall) {
    return (
      <div className='App'>
        {children}
      </div>
    );
  };

  if (user.status && user.status.online && user.rol.name === 'consultant') {
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

  if (user.name && user.dni && user.rol.name === 'client') {
    console.log('Entré en el layout de client');
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

  console.log('Entré en el layout de general');
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
