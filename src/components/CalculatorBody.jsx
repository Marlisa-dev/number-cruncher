import React, { useState } from 'react'
import AnswerView from './AnswerView'
import ButtonsContainer from './ButtonsContainer'

const CalculatorBody = () => {
  const [input, setInput] = useState('');
  const [displayValue, setDisplayValue] = useState('0');
  const [previousResult, setPreviousResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === 'RESET') {
      setInput('');
      setDisplayValue('0');
      setPreviousResult(null);
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
        setPreviousResult(calculatedResult.toString());
        setInput(''); //clear input
      } catch (error) {
        setDisplayValue('Error');
        setInput('');
        setPreviousResult(null);
      }
    } else if(['+', '-', '*', '/', 'x'].includes(value)){
      if (previousResult !== null) {
        setDisplayValue(previousResult + value);
        setInput(previousResult + value);
        setPreviousResult(null);
      } else {
        setInput((prevInput) => prevInput + value);
        setDisplayValue((prevDisplay) => prevDisplay + value);
      }
    }
    
    else{
      setInput((prevInput) =>  prevInput + value);
      setDisplayValue((prevDisplay) => (prevDisplay === '0' ? value : prevDisplay + value));
    }
  };


  return (
    <div className={'calculator-body'}>
        <AnswerView displayValue={displayValue}/>
        <ButtonsContainer handleButtonClick={handleButtonClick}/>
    </div>

  )
}

export default CalculatorBody