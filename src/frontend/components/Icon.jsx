import React from 'react';
import IcoMoon from 'react-icomoon';
import iconSet from '../assets/static/logo/SVG/selection.json';

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
