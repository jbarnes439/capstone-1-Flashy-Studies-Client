import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { Section } from '../../Utilities/Utilities';
import TokenService from '../../services/token-service';
import './LoginPage.css';

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
      <div>
        <Section className='LoginPage'>
          <h2>Login</h2>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess} />
        </Section>
        <img src={require('../../images/notecard-and-pen.jpg')} alt='A traditional notecard' />
      </div>
    )
  }
}
