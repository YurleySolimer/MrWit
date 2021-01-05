import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = (props) => {
  return (
    <footer className={footerClass}>
      <a href='/'>Términos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  );
};

export default Footer;
