import React, { useEffect, useState } from 'react';

const QuestionContainer = ({ question, answerOptions, answerClick}) => {  
  const [answers, setAnswers] = useState(null);
  
  return (
    <div className='questionContainer'>
      <div className='question'>{question}</div>
      {answerOptions.map(a => 
        <button className='AnswerButton' disabled={answers && a.id != answers} onClick={() => {answerClick(a); setAnswers(a.id)}}>
          {a.answer}
        </button>)}
      
      
    </div>
  )
}

export default QuestionContainer;