import React, { Component } from 'react';
import PreMadeQuizService from '../../services/premade-quiz-api-service';
import PreMadeQuizContext from '../../contexts/PreMadeQuizContext';
import TokenService from '../../services/token-service';
import { Section } from '../../Utilities/Utilities';
import './UserHomePage.css';

export default class UserHomePage extends Component {
  static contextType = PreMadeQuizContext;

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

  // renderTopicSelections() {      
  //   return this.context.topics.map(t => <option value={t.topic}>{t.topic}</option>)
  // }

  componentDidMount() {
    this.context.clearError()
    PreMadeQuizService.getAllTopics()
      .then(this.context.setTopics)
      .catch(this.context.setError)  
  }

  render() {      
    let content = this.renderUser()
    // let topics = this.renderTopicSelections()

    return (
      <div>
      <Section className='UserPage'>
        {content}
      </Section>
      <button onClick={this.handleTakeQuiz}> Take a quiz! </button>
      <button onClick={this.handleStudyFlashCards}> Study </button>
      {/* <select>
        {topics}
      </select> */}
      </div>
    )
  }
}