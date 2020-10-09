import React, { useState } from 'react';
import './QuestionContainer.css';

const QuestionContainer = ({ question, answerOptions, answerClick }) => {
  const [answers, setAnswers] = useState(null);

  return (
    <div className='questionContainer'>
      <div className='question'>{question}
        <br />
        {answerOptions.map(a => {
          if (!answers) {
            return <button className='AnswerButton' onClick={() => { answerClick(a); setAnswers(a.id) }}>
              {a.answer}
            </button>
          }
          if (answers !== a.id) {
            return <p className='grey'>{a.answer}</p>
          } else {
            return <p className='blue'>{a.answer}</p>
          }
        })}
      </div>
    </div>
  )
}

export default QuestionContainer;