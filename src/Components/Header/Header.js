import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

class Header extends Component {
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
      <li>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </li>
    )
  }

  renderLoginLink() {
    return (
      <li>

        <Link
          to='/login'>
          Login
        </Link>

        <Link
          to='/register'>
          Sign up!
        </Link>

      </li>
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

export default withRouter(Header);