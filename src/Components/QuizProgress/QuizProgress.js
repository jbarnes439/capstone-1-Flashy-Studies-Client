import React from 'react';

const QuizProgress = (props) => {
  return (
    <section className='quizProgress'>
      <h2>Score: {props.score} </h2>
      <h3>Questions answered: {props.responses} </h3>
    </section>
  )
}

export default QuizProgress;