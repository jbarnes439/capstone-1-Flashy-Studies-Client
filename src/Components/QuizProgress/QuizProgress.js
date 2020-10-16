import React from 'react';

const QuizProgress = (props) => {
  return (
    <section className='quizProgress'>
      <h2>So far your score is {props.score} </h2>
      <h3>You have answered {props.responses} </h3>
    </section>
  )
}

export default QuizProgress;