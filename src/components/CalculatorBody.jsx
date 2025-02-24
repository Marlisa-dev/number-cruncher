import React, { useState } from 'react'
import AnswerView from './AnswerView'
import ButtonsContainer from './ButtonsContainer'

const CalculatorBody = () => {
  const [input, setInput] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'RESET') {
      setInput('');
      setDisplayValue('0');
    } else if (value === 'DEL') {
      setInput((prevInput) => {
        const newInput = prevInput.slice(0, -1);
        setDisplayValue(newInput || '0');
        return newInput;
      });
    } else if (value === '=') {
      try {
        const calculatedResult = eval(input.replace('x', '*'));
        setDisplayValue(calculatedResult.toString());
        setInput(''); //clear input
      } catch (error) {
        setDisplayValue('Error');
        setInput('');
      }
    } else{
      setInput((prevInput) => {
        const newInput = prevInput + value;
        setDisplayValue(newInput);
        return newInput;
      });
    }
  };


  return (
    <div className={'calculator-body'}>
        <AnswerView input={input} result={displayValue}/>
        <ButtonsContainer handleButtonClick={handleButtonClick}/>
    </div>

  )
}

export default CalculatorBody