import React, { useState } from 'react';
import Body from './Body';
import History from './History';
const Calculator = () => {
  const [history, setHistory] = useState([]);
  const [output, setOutput] = useState('');
  const [input, setInput] = useState([]);

  const handleInput = (inputValue) => {
    setInput(input + inputValue);
    setHistory([...history, inputValue]);
  };

  const handleClear = () => {
    setHistory([]);
    setOutput('')
    setInput([]);
  };

   const handleDelete = () => {
   //setInput(input.slice(0, -1));
    setHistory(history.slice(0, -1))
  };

 const calculate = () => {
  const regex = /(\d+(\.\d+)?)([+\-Xx÷/%])(\d+(\.\d+)?|$)/;

  const match = input.match(regex);

  if (match) {
    const n1 = match[1];
    const operator = match[3];
    const n2 = match[4];

    const firstNum = parseFloat(n1);

    if (operator === '%') {
      return firstNum / 100;
    }

    if (n2) {
      const secondNum = parseFloat(n2);

      if (operator === '+') return firstNum + secondNum;
      if (operator === '-') return firstNum - secondNum;
      if (operator === 'X' || operator === 'x') return firstNum * secondNum;
      if (operator === '÷' || operator === '/') return firstNum / secondNum;
      if (operator === '%') return (firstNum / 100) * secondNum;
    } else {
      throw new Error('Invalid input');
    }
  }

  throw new Error('Invalid input');
};



 const handleEquals = () => {
  try {
    let result = input;
    result = result.replace(/X/g, '*');
    result = result.replace(/÷/g, '/');

    const regex = /(\d+(\.\d+)?)([+\-Xx÷/%])(\d+(\.\d+)?|$)/;

    const match = result.match(regex);

    if (match) {
      const n1 = match[1];
      const operator = match[3];
      const n2 = match[4];

      result = calculate(n1, operator, n2).toString();

      setOutput(result);
      setHistory([...history, '=', result]); // Add a new line with the result in history
    } else {
      throw new Error("Invalid input");
    }
  } catch (error) {
    setOutput('Error');
  }
};

  return (
    <div>
    <History history={history}
    output={output}
    />
        
    
      <Body
        handleInput={handleInput}
        handleClear={handleClear}
        handleDelete={handleDelete}
        handleEquals={handleEquals}
      />
   </div>
  );
};

export default Calculator;
