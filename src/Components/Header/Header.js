import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLogoutClick = () => {
    this.props.history.push('/')
    TokenService.clearAuthToken();
    TokenService.clearUsername();
    this.renderLoginLink();
  }

  renderLogoutLink() {
    return (
      <div className='navigation'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='navigation'>

        <Link
          to='/login'>
          <li>Login</li>
        </Link>

        <Link
          to='/register'>
          <li>Sign up!</li>
        </Link>

      </div>
    )
  }

  render() {
    return <>
      <div className='Header'>
        <div className='inner_header'>
          <div className='logo_container'>
            <h1>
              <Link to='/'>
                Flashy <span>Studies!</span>
              </Link>
            </h1>
          </div>

          <ul className='navigation'>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </ul>
        </div>
      </div>
    </>

  }

}