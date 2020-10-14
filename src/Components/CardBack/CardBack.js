import React from 'react';
import './CardBack.css';

const CardBack = (props) => {
  CardBack.defaultProps = {
    answer: {},
    click: () => { },
  } 

  if (props.answer) {
    return (
      <div className='cardBack'>
        <h4>{props.answer.answer}</h4>
        {/* {props.answers.map(a => <h4 key={a.id}>{a.answer}</h4>)} */}
        <button onClick={event => props.click(event)}>Flip Card</button>
      </div>
    )
  }

  return <div>loading</div>
}

export default CardBack;