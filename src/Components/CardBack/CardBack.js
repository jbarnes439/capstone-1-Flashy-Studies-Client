import React from 'react';
import './CardBack.css';

const CardBack = (props) => {
  return (
    <div className='cardBack'>
      {props.answers.map(a => <h4 key={a.id}>{a.answer}</h4>)}
      <button onClick={event => props.click(event)}>Flip Cards</button>
    </div>
  )
}

export default CardBack;