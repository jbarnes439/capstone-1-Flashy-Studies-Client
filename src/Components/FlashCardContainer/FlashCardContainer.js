import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import PreMadeQuizContext from '../../contexts/PreMadeQuizContext';
import PreMadeQuizService from '../../services/premade-quiz-api-service';
import ListCards from '../ListCards/ListCards';
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';
import TokenService from '../../services/token-service';

class FlashCardContainer extends Component {
  static contextType = PreMadeQuizContext;

  constructor(props) {
    super(props);
    this.state = {      
      isFlipped: {3: true, 7: true, 10: true}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event, id) {
    event.preventDefault();
    // this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    this.setState({
      isFlipped: {...this.state.isFlipped, [id]: !this.state.isFlipped[id]}
    })
    
    // map to create new is flipped object with the particular id as true or false depending on flip direction
    // {3: true, 7: false, 10: true}

    // {3: false, 7: false, 10: true}

    // e => this.handleClick(e, id)
    
  }

  componentDidMount() {
    this.context.clearError()
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
        {this.context.questions.length > 0 && this.context.questions.map(
          ({ question, id }) =>
            <ReactCardFlip
              isFlipped={this.state.isFlipped[id]}
              flipSpeedBackToFront={0.2}
              flipSpeedFrontToBack={0.2}
              flipDirection="vertical"
            >

              <CardFront
                question={question}
                key={id}
                click={e => this.handleClick(e, id)}
              />
              
              <CardBack
                answers={this.context.answers.find(answer => answer.question_id === id)}
                key={id}
                click={e => this.handleClick(e, id)}
              />

            </ReactCardFlip>
        )}
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