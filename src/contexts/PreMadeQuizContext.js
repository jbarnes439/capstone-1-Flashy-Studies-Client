import React, { Component } from 'react';


const PreMadeQuizContext = React.createContext({

  questions: [],
  answers: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setQuestion: () => { },
  addQuestion: () => { },
  setAnswers: () => { },
  addAnswers: () => { },
});

export default PreMadeQuizContext;

export class PreMadeQuizProvider extends Component {
  state = {
    questions: [],
    answers: [],
    error: null,
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setQuestions = questions => {
    this.setState({ questions })
  }

  addQuestions = question => {
    this.setQuestions([
      ...this.state.questions,
      question
    ])
  }

  setAnswers = answers => {
    this.setState({ answers })
  }

  addAnswers = answers => {
    this.setAnswers([
      ...this.state.answers,
      answers
    ])
  }

  render() {
    return (
      <PreMadeQuizContext.Provider
        value={{
          questions: this.state.questions,
          answers: this.state.answers,
          error: this.state.error,
          setError: this.setError,
          clearError: this.clearError,
          setQuestions: this.setQuestions,
          addQuestions: this.addQuestions,
          setAnswers: this.setAnswers,
          addAnswers: this.addAnswers,
        }}>
          {this.props.children}
        </PreMadeQuizContext.Provider>        
    )
  }
}