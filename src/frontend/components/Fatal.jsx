import React from 'react';

const Fatal = ({ message }) => {
  return (
    <div>
      <h2>
        Parece que hubo un error...
        <br />
        {message}
      </h2>
    </div>
  );
};

export default Fatal;
