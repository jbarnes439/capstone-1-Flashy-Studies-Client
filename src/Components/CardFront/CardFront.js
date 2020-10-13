import React from 'react';
import './CardFront.css';

const CardFront = (props) => {
  return (
    <div className='cardFront'>
      <h3>{props.question}</h3>
      <button onClick={event => props.click(event)}>Flip Cards</button>
    </div>
  )
}

export default CardFront;