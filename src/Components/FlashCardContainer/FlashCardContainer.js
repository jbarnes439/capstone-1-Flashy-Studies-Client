import React, { Component } from 'react';
import PreMadeQuizContext from '../../contexts/PreMadeQuizContext';
import PreMadeQuizService from '../../services/premade-quiz-api-service';
import ListCards from '../ListCards/ListCards';

class FlashCardContainer extends Component {
  static contextType = PreMadeQuizContext;
  state = {
    showAnswer: false,
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

  toggleShowAnswers = (questionId) => {
    const doesShow = this.state.showAnswer;
    this.setState({ showAnswer: !doesShow })
  }

  renderShowButton() {
    return (
      <button onClick={this.toggleShowAnswers}>Show Answers</button>
    )
  }

  renderHideButton() {
    return (
      <button onClick={this.toggleShowAnswers}>Hide Answers</button>
    )
  }

  render() {
    return (

      <div className='studyContainer'>
        <div className='studyTitle'>
          <h2> Study Flash Cards </h2>
        </div>
        <div>
          {this.state.showAnswers ? this.renderHideButton() : this.renderShowButton()}
        </div>
        {this.context.questions.length > 0 && this.context.questions.map(
          ({ question, id }) =>
            <ListCards               
              answers={this.context.answers.filter(answer => answer.question_id === id)}
              showing={this.state.showAnswer}
              question={question}
              key={id} />
        )}

      </div>
    )
  }
}

export default FlashCardContainer;