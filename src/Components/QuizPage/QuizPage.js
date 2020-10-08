import React, { Component } from 'react';
import PreMadeQuizService from '../../services/premade-quiz-api-service';
import PreMadeQuizContext from '../../contexts/PreMadeQuizContext';
import QuestionContainer from '../QuestionContainer/QuestionContainer';

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
          <div className='quizTitle'><h2>Example Quiz</h2></div>
          {this.context.questions.length > 0 && this.context.questions.map(
            ({ question, id }) =>
              <QuestionContainer
                // need to also send answers to the specific question 
                answerOptions={this.context.answers.filter(answer => answer.question_id === id)}
                answerClick={this.handleUserAnswer}
                question={question}
                key={id} />
          )}
          <h2>So far you're score is {this.state.score} </h2>
          <h3>You have answered {this.state.responses} </h3>
        </div>
      )
    }
    return (
      <div>
        <h2>You got {this.state.score} correct!</h2>
      </div>
    )
  }
}

export default QuizPage;