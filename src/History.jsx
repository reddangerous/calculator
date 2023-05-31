import React from 'react';

const History = ({ history,output }) => {
  return (
  <div className="history">
        {history.map((entry, index) => (
          <div key={index}>{entry}
          </div>
        ))}
         {/* <div className="output">{output}</div> */}
    </div>
  );
};

export default History;
