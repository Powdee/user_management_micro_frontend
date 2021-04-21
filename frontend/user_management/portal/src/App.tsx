import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './components/navigation';
import Wrapper from './components/wrapper';
import Home from './components/home';

import './styles.css'

const LoginPage = React.lazy(() => import('login/page'));
const SignUpPage = React.lazy(() => import('signup/page'));
const UsersPage = React.lazy(() => import('users/page'));

const NotFound = (): JSX.Element => (
  <h1>Not found | 404</h1>
)

export const Portal = (): JSX.Element => (
  <React.StrictMode>
    <Navigation />
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <React.Suspense fallback={<span>loading...</span>}>
              <LoginPage />
            </React.Suspense>
          </Route>
          <Route path="/signup">
            <React.Suspense fallback={<span>loading...</span>}>
              <SignUpPage />
            </React.Suspense>
          </Route>
          <Route path="/users">
            <React.Suspense fallback={<span>loading...</span>}>
              <UsersPage />
            </React.Suspense>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Wrapper>
  </React.StrictMode>
)

ReactDOM.render(
  <Portal />,
  document.getElementById('root')
);
