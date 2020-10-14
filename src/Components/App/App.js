import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PublicOnlyRoute from '../../Utilities/PublicRoute';
// import PrivateOnlyRoute from '../../Utilities/PrivateRoute';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import UserHomePage from '../UserHomePage/UserHomePage';
import QuizPage from '../QuizPage/QuizPage';
import FlashCardContainer from '../FlashCardContainer/FlashCardContainer';
import { UserProvider } from '../../contexts/UserContext';
import { PreMadeQuizProvider } from '../../contexts/PreMadeQuizContext';


class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <UserProvider>
          <PreMadeQuizProvider>
            <header className='App_header'>
              <Header />
            </header>
            <main className='App_main'>
              {this.state.hasError && <p className='red'>Whoopsies! There was an error!</p>}
              <Switch>
                <Route exact
                  path={'/'}
                  component={LandingPage}
                />
                <PublicOnlyRoute
                  path={'/register'}
                  component={RegisterPage}
                />
                <PublicOnlyRoute
                  path={'/login'}
                  component={LoginPage}
                />
                <Route
                  path={'/user/:id'}
                  component={UserHomePage}
                />
                <Route
                  path={'/quizpage'}
                  component={QuizPage}
                />
                <Route
                  path={'/flashcards'}
                  component={FlashCardContainer}
                />
              </Switch>
            </main>
          </PreMadeQuizProvider>
        </UserProvider>

      </div>
    );
  }
}

export default App;
