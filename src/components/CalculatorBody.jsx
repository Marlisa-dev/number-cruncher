import React, { useState, useEffect } from 'react';
import AnswerView from './AnswerView'
import ButtonsContainer from './ButtonsContainer'

const CalculatorBody = () => {
  const [input, setInput] = useState(''); // Stores the current input (e.g., "2+3")
  const [displayValue, setDisplayValue] = useState('0'); // Controls what is shown in AnswerView
  const [previousResult, setPreviousResult] = useState(null); // Stores the result of the last calculation

  const handleButtonClick = (value) => {
    if (value === 'RESET') {
      setInput('');
      setDisplayValue('0');
      setPreviousResult(null);
    } else if (value === 'DEL') {
      setInput((prevInput) => {
        const newInput = prevInput.slice(0, -1); // Remove the last character
        setDisplayValue(newInput || '0'); // Update displayValue
        return newInput;
      });
    } else if (value === '=') {
      try {
        // Evaluate the input and set the result
        const calculatedResult = eval(input.replace('x', '*')); // Replace 'x' with '*' for multiplication
        setDisplayValue(calculatedResult.toString()); // Show the result
        setPreviousResult(calculatedResult.toString()); // Store the result for chaining
        setInput(''); // Clear the input
      } catch (error) {
        setDisplayValue('Invalid Input'); // Show error message
        setInput(''); // Clear the input
        setPreviousResult(null); // Reset previous result
      }
    } else if (['+', '-', '*', '/', 'x'].includes(value)) {
      // Prevent invalid operator inputs
      if (input === '' && previousResult === null) return;
      if (['+', '-', '*', '/', 'x'].includes(input.slice(-1))) return;
      if (previousResult !== null) {
        setInput(previousResult + value);
        setDisplayValue(previousResult + value);
        setPreviousResult(null);
      } else {
        setInput((prevInput) => prevInput + value);
        setDisplayValue((prevDisplay) => prevDisplay + value);
      }
    } else if (value === '.') {
      // Prevent multiple decimal points in a single number
      const lastNumber = input.split(/[\+\-\*\/x]/).pop();
      if (!lastNumber.includes('.')) {
        setInput((prevInput) => prevInput + value);
        setDisplayValue((prevDisplay) => (prevDisplay === '0' ? value : prevDisplay + value));
      }
    } else {
      setInput((prevInput) => prevInput + value);
      setDisplayValue((prevDisplay) => (prevDisplay === '0' ? value : prevDisplay + value));
    }
  };

  // Add keyboard support
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (/\d|\.|\+|\-|\*|\/|x|=|Enter|Backspace|Delete/.test(key)) {
        event.preventDefault();
        if (key === 'Enter') handleButtonClick('=');
        else if (key === 'Backspace' || key === 'Delete') handleButtonClick('DEL');
        else handleButtonClick(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input, displayValue, previousResult]);

  return (
    <div className="calculator-body">
      <AnswerView result={displayValue} />
      <ButtonsContainer handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default CalculatorBody