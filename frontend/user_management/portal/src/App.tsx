import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Wrapper from './components/wrapper';

const LoginPage = React.lazy(() => import('login/page'));
const SignUpPage = React.lazy(() => import('signup/page'));
const UsersPage = React.lazy(() => import('users/page'));
 
export const Portal = () => (
  <div className="App">
    Portal App
    <Link to="/login">Login</Link>
    <br/>
    <Link to="/signup">Signup</Link>
    <br/>
    <Link to="/users">Users</Link>
    <Wrapper />
  </div>
)

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
);