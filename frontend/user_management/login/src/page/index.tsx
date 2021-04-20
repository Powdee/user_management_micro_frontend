import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => (
	<>
		Login <br />
		<Link to="/">go back</Link>
		<br />
		<Link to="/signup">Sign up</Link>
	</>
)

export default LoginPage;