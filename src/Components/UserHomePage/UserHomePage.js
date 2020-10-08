import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import UserApiService from '../../services/user-api-service';
import { Section } from '../../Utilities/Utilities';

export default class UserHomePage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = UserContext

  componentDidMount() {
    const { id } = this.props.match.params
    this.context.clearError()
    UserApiService.getUser(id)
      .then(this.context.setUser)
      .catch(this.context.setError)
  }

  // componentWillUnmount() {
  //   this.context.clearUser()
  // }

  renderUser() {
    const { user } = this.context
    return <h2>Welcome to Flashy Studies {user.username}!</h2>   
  }

  render() {
    const { error, user } = this.context    
    let content
    if (error) {
      content = (error.error === `User doesn't exist`)
      ? <p className='red'>User not found</p>
      : <p className='red'>There was an error</p>
    } else if (!user.id) {
      content = <div className='loading' />
    } else {
      content = this.renderUser()
    }
    return (
      <Section className='UserPage'>
        {content}
      </Section>
    )
  }
}