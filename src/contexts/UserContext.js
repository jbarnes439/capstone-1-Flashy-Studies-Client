import React, { Component } from 'react';



const UserContext = React.createContext({
  user: {},
  questions: [],
  answers: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setUser: () => {},
  clearUser: () => {},
  setQuestion: () => {},
  addQuestion: () => {},
  setAnswers: () => {},
  addAnswers: () => {},
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    user: {},
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {
    console.log(user);
    this.setState({ user })
  }

  clearUser = () => {
    this.setUser({})
    this.setQuestions([])
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
    const value = {
      user: this.state.user,
      questions: this.state.questions,
      answers: this.state.answers,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      clearUser: this.clearUser,
      setQuestions: this.setQuestions,
      addQuestions: this.addQuestions,
      setAnswers: this.setAnswers,
      addAnswers: this.addAnswers,
    }

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}