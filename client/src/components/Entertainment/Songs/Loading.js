import React from 'react';
import loading from './Loading.gif';

export default () => {
  return (
    <div>
      <img
        src={loading}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
  );
};
