import React, { Component } from 'react';
import { Button, Input, Required } from '../../Utilities/Utilities';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      username: username.value.toLowerCase(),
      password: password.value,
    })
      .then(user => {
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })

  }

  render() {
    const { error } = this.state
    return (
      <form
        className='registrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>        
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            Username <Required />
          </label>
          <Input
            name='username'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>        
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}