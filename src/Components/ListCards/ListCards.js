import React from 'react';
import './ListCards.css';

const ListCards = (props) => {

  if (props.showing) {
    return (
      <div className='listCards'>
        <div className='card'>
          <h3>{props.question}</h3>
          <br />
          {props.answers.map(a => <p>{a.answer}</p>)}
        </div>
      </div>
    )
  }

  return (
    <div className='listCards'>
      <div className='card'>
        <h3>{props.question}</h3>
      </div>
    </div>
  )
}

export default ListCards;