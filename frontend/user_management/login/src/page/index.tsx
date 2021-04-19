import React from 'react'
import { Link, Route } from 'react-router-dom';

const LoginRoute = () => (
	<React.Suspense fallback={<span>loading...</span>}>
		<Route path="/login">
			Login <br />

			<Link to="/">go back</Link>
		</Route>
	</React.Suspense>
)

export default LoginRoute;