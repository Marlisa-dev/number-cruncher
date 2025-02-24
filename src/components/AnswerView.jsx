import React from 'react'

const AnswerView = ({ input, result }) => {
  return (
    <div className='answer-view'>
      <div className="input">{input}</div>
      <div className="result">{result}</div>
    </div>
  )
}

export default AnswerView