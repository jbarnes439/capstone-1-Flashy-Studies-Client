import React, { Component } from 'react';
import PreMadeQuizService from '../../services/premade-quiz-api-service';
import PreMadeQuizContext from '../../contexts/PreMadeQuizContext';
import QuestionContainer from '../QuestionContainer/QuestionContainer';
import QuizProgress from '../QuizProgress/QuizProgress';
import TokenService from '../../services/token-service';

class QuizPage extends Component {
  static contextType = PreMadeQuizContext;
  state = {
    score: 0,
    responses: 0,
  }

  handleUserAnswer = (answer) => {
    if (answer.correct) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 10
        ? this.state.responses + 1 : 10
    })
  }

  handleTakeAgain = () => {
    this.setState({
      score: 0,
      responses: 0
    })
  }

  handleGoBackClick = () => {
    const username = TokenService.getUsername()
    this.props.history.push(`/user/${username}`)
  }

  componentDidMount() {
    this.context.clearError()
    PreMadeQuizService.getAllQuestions()
      .then(this.context.setQuestions)
      .catch(this.context.setError)
    PreMadeQuizService.getAllAnswers()
      .then(this.context.setAnswers)
      .catch(this.context.setError)
  }

  render() {

    if (this.state.responses < 10) {
      return (
        <div className='quizContainer'>
          <div className='quizTitle'><h2>Quick Quiz</h2></div>
          {this.context.questions.length > 0 && this.context.questions.map(
            ({ question, id }) =>
              <QuestionContainer
                // need to also send answers to the specific question 
                answerOptions={this.context.answers.filter(answer => answer.question_id === id)}
                answerClick={this.handleUserAnswer}
                question={question}
                key={id} />
          )}
          <QuizProgress 
            score={this.state.score}
            responses={this.state.responses} />
          <button onClick={this.handleGoBackClick}>Go back</button>
        </div>
      )
    }
    return (
      <div>
        <h2>You got {this.state.score} correct!</h2>
        <button onClick={this.handleTakeAgain}>Take Again</button>
      </div>
    )
  }
}

export default QuizPage;