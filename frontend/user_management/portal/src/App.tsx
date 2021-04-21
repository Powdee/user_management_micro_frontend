import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Navigation from './components/navigation';
import Wrapper from './components/wrapper';

import './styles.css'

const LoginPage = React.lazy(() => import('login/page'));
const SignUpPage = React.lazy(() => import('signup/page'));
const UsersPage = React.lazy(() => import('users/page'));
 
export const Portal = () => (
  <div className="App">

  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Portal />
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
        </Switch>
      </Router>
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);