import React, { useState } from 'react'
import AnswerView from './AnswerView'
import ButtonsContainer from './ButtonsContainer'

const CalculatorBody = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'RESET') {
      setInput('');
      setResult('');
    } else if (value === 'DEL') {
      setInput((prevInput) => prevInput.slice(0, -1)); //Remove last character
    } else if (value === '=') {
      try {
        const calculatedResult = eval(input.replace('x', '*'));
        setResult(calculatedResult);
      } catch (error) {
        setResult('Error');
      }
    } else{
      setInput((prevInput) => prevInput + value);
    }
  };


  return (
    <div className={'calculator-body'}>
        <AnswerView input={input} result={result}/>
        <ButtonsContainer handleButtonClick={handleButtonClick}/>
    </div>

  )
}

export default CalculatorBody