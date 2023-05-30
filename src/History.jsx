import React from 'react';

const History = ({ history }) => {
  return (
    <div className='history'>
      {history.map((calculation, index) => (
        <div key={index}>{calculation}</div>
      ))}
    </div>
  );
};

export default History;
