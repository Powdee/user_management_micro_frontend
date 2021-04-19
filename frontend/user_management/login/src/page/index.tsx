import React from 'react'
import { Link, Route } from 'react-router-dom';

const LoginRoute = () => (
	<React.Suspense fallback={<span>loading...</span>}>
		<Route path="/login">
			Login <br />
			<Link to="/">go back</Link>
			<br />
			<Link to="/signup">Sign up</Link>
		</Route>
	</React.Suspense> 
)

export default LoginRoute;