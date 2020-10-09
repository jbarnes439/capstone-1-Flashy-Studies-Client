import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { Section } from '../../Utilities/Utilities';
import TokenService from '../../services/token-service';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }  

  handleLoginSuccess = () => {
    const username = TokenService.getUsername()
    this.props.history.push(`/user/${username}`)    
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    )
  }
}
