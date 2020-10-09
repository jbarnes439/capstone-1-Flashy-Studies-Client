import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import { Section } from '../../Utilities/Utilities';

export default class UserHomePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  } 

  handleTakeQuiz = () => {    
    this.props.history.push('/quizpage')
  }

  handleStudyFlashCards = () => {
    this.props.history.push('/flashcards')
  }

  renderUser() {    
    const user = TokenService.getUsername()
    return <h2>Welcome to Flashy Studies {user}!</h2>   
  }

  render() {      
    let content = this.renderUser()
    
    return (
      <div>
      <Section className='UserPage'>
        {content}
      </Section>
      <button onClick={this.handleTakeQuiz}>Take a quiz!</button>
      <button onClick={this.handleStudyFlashCards}> Study </button>
      </div>
    )
  }
}