import React from 'react'

const AnswerView = ({ input, result }) => {
  return (
    <div className='answer-view'>
      {/* <div className="input">{input}</div> */}
      <div className="result">{result || '0'}</div>
    </div>
  )
}

export default AnswerView