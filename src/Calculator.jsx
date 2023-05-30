import React, { useState } from 'react';
import Body from './Body';
import History from './History';

const Calculator = () => {
  const [history, setHistory] = useState([]);
  const [input,onInput, setInput] = useState('');
   
  const handleInput = (input) => {
    setHistory([...history, input]);
  };
  const handleClear = () => {
    setHistory([]);
    };
const   handleDelete = () => {
    setHistory(history.slice(0, -1));
    };
   



  
  return (
    <div>
      <History history={history} />
      <Body onInput={handleInput}
            onClear={handleClear}
            onDelete={handleDelete}
            onEquals = {handleEquals}
           
      />
    </div>
  );
};

export default Calculator;
