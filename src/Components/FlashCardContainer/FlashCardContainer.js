import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import PreMadeQuizContext from '../../contexts/PreMadeQuizContext';
import PreMadeQuizService from '../../services/premade-quiz-api-service';
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';
import TokenService from '../../services/token-service';

class FlashCardContainer extends Component {
  static contextType = PreMadeQuizContext;

  constructor(props) {
    super(props);
    this.state = {      
      isFlipped: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event, id) {        
    this.setState({
      isFlipped: {...this.state.isFlipped, [id]: !this.state.isFlipped[id]}
    })  
  }

  componentDidMount() {    
    PreMadeQuizService.getAllQuestions()
      .then(this.context.setQuestions)
      .catch(this.context.setError)
    PreMadeQuizService.getAllCorrectAnswers()
      .then(this.context.setAnswers)
      .catch(this.context.setError)    
  }  

  handleGoBackClick = () => {
    const username = TokenService.getUsername()
    this.props.history.push(`/user/${username}`)
  }

  renderCards = () => {

    return (
      <div className='studyContainer'>
        {this.context.questions !== undefined && (this.context.questions.length > 0 && this.context.questions.map(
          ({ question, id }) =>
            <ReactCardFlip
              isFlipped={this.state.isFlipped[id]}
              flipSpeedBackToFront={0.5}
              flipSpeedFrontToBack={0.5}
              flipDirection="vertical"
              key={id}
            >

              <CardFront
                question={question}
                key={id}
                click={e => this.handleClick(e, id)}
              />
              
              <CardBack                
                answer={this.context.answers.find(answer => answer.question_id === id)}
                key={id}
                click={e => this.handleClick(e, id)}
              />

            </ReactCardFlip>
        ))}
        <button onClick={this.handleGoBackClick}>Go back</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderCards()}
      </div>
    )
  };

}

export default FlashCardContainer;