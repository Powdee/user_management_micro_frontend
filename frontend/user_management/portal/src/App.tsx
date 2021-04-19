import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const LoginRoute = React.lazy(() => import('login/Route'));
 
export const Portal = () => (
  <div className="App">
    Portal App

    <Link to="/login">Login</Link>
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <React.Suspense fallback={<span>loading...</span>}>
            <LoginRoute />
          </React.Suspense>
        </Route>
        <Route path="/" exact>
          <Portal />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);