import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const LoginRoute = React.lazy(() => import('login/Route'));
const SignUpRoute = React.lazy(() => import('signup/Route'));
 
export const Portal = () => (
  <div className="App">
    Portal App

    <Link to="/login">Login</Link>
    <br/>
    <Link to="/signup">Signup</Link>
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
            <LoginRoute />
          </React.Suspense>
        </Route>
        <Route path="/signup">
          <React.Suspense fallback={<span>loading...</span>}>
            <SignUpRoute />
          </React.Suspense>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);