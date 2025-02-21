import React from 'react'
import AnswerView from './AnswerView'
import ButtonsContainer from './ButtonsContainer'

const CalculatorBody = () => {
  return (
    <div className={'calculator-body'}>
        <AnswerView />
        <ButtonsContainer />
    </div>

  )
}

export default CalculatorBody