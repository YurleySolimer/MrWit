import React from 'react';
import classNames from 'classnames/bind';
import '../assets/styles/components/Footer.scss';

const Footer = (props) => {
  const { isLoginFooter, isRegisterFooter } = props;
  const footerClass = classNames('footer', {
    isLoginFooter,
    isRegisterFooter,
  });

  return (
    <footer className={footerClass}>
      <a href='/'>Términos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  );
};

export default Footer;