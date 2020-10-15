import React, { Component } from 'react';
import { Section } from '../../Utilities/Utilities';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './RegisterPage.css';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <div className='registerPage'>
        <Section className='RegistrationPage'>
          <h2>Register here!</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </Section>
        <img src={require('../../images/notecard-and-pen.jpg')} alt='A traditional notecard' />
      </div>
    )
  }
}