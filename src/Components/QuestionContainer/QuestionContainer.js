import React, { useEffect, useState } from 'react';
import './QuestionContainer.css';
import { shuffle } from '../../Utilities/Utilities';

const QuestionContainer = ({ question, answerOptions, answerClick }) => {
  const [answers, setAnswers] = useState(null);
  

  return (
    <div className='questionContainer'>
      <div className='question'>{question}
        <br />
        {(answerOptions) ?
          (answerOptions).map(a => {
            if (!answers) {
              return <button key={a.id} className='AnswerButton' onClick={() => { answerClick(a); setAnswers(a.id) }}>
                {a.answer}
              </button>
            }
            if (answers !== a.id) {
              return <p key={a.id }className='hide'>{a.answer}</p>
            } else {
              return <p key={a.id }className='blue'>{a.answer}</p>
            }
          })
          : <div>loading</div>
        }
      </div>
    </div>
  )
}

export default QuestionContainer;