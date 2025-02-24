import React from 'react'

const AnswerView = ({ result }) => {
  return (
    <div className='answer-view'>
      <div className="result">{result || '0'}</div>
    </div>
  )
}

export default AnswerView