import React from 'react';
import './CardFront.css';

const CardFront = (props) => {
  return (
    <div className='cardFront'>
      <p>{props.question}</p>
      <button onClick={event => props.click(event)}>Flip Card</button>
    </div>
  )
}

export default CardFront;