import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { Button, Input } from '../../Utilities/Utilities';
import './LoginForm.css';


export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  state = {
    error: null,
    loading: false
  }

  handleSubmitJwtAuth = event => {
    event.preventDefault()
    this.setState({
      error: null,
      loading: true
    })
    const { username, password } = event.target

    AuthApiService.postLogin({
      username: username.value.toLowerCase(),
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        TokenService.saveUsername(res.user)
        this.setState({
          loading: false,
        })
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ 
          error: res.error,
          loading: false
         })
      })
  }

  render() {
    const { error } = this.state
    if (this.state.loading) {
      return <h3>Verifying...</h3>
    }
    return (      
      <form
        className='loginForm'
        onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='username'>
          <label htmlFor='LoginForm__username'>
            Username
            </label>
          <Input
            required
            name='username'
            id='LoginForm__username'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm_password'>
            Password 
            </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm_password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
          </Button>
      </form>
    )
  }
}