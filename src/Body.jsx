import BackspaceIcon from '@mui/icons-material/Backspace';
import  {useState} from 'react';
import React from 'react';

const Body = ({onClear, onInput , onDelete, onEquals}) => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    onInput(input + value);
  };

  const handleClear = () => {
    onClear('');
  };

  const handleDelete = () => {
    onDelete(input.slice(0, -1));
  };

 const handleEquals = () => {
  try {
    let result = input;
    result = result.replace(/x/g, '*');
    if (result.includes('%')) {
      const percentageValue = parseFloat(result.replace(/%/g, ''));
      result = (percentageValue / 100).toString();
    }
    result = eval(result).toString();

    setInput(result); // Update the input with the result
    onInput(result); // Update the history with the result
  } catch (error) {
    // Handle any error that occurs during evaluation
    setInput('Error');
    //onInput('Error');
  }
};

  return (
    <div className='body'>
      <button className='clear' onClick={handleClear}>C</button>
      <button className='delete' onClick={handleDelete}><BackspaceIcon/></button>
      <button className='percent' onClick={() => handleButtonClick('%')}>%</button>
      <button className='divide' onClick={() => handleButtonClick('÷')}>÷</button>
      <button className='seven' onClick={() => handleButtonClick('7')}>7</button>
      <button className='eight' onClick={() => handleButtonClick('8')}>8</button>
      <button className='nine' onClick={() => handleButtonClick('9')}>9</button>
      <button className='multiply' onClick={() => handleButtonClick('x')}>x</button>
      <button className='four' onClick={() => handleButtonClick('4')}>4</button>
      <button className='five' onClick={() => handleButtonClick('5')}>5</button>
      <button className='six' onClick={() => handleButtonClick('6')}>6</button>
      <button className='subtract' onClick={() => handleButtonClick('-')}>-</button>
      <button className='one' onClick={() => handleButtonClick('1')}>1</button>
      <button className='two' onClick={() => handleButtonClick('2')}>2</button>
      <button className='three' onClick={() => handleButtonClick('3')}>3</button>
      <button className='add' onClick={() => handleButtonClick('+')}>+</button>
      <button className='doublezero' onClick={() => handleButtonClick('00')}>00</button>
      <button className='zero' onClick={() => handleButtonClick('0')}>0</button>
      <button className='dot' onClick={() => handleButtonClick('.')}>.</button>
      <button className='equals' onClick={handleEquals}>=</button>

    
    </div>
  );
};

export default Body;
