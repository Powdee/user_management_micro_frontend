import React from 'react';

const Header = React.lazy(() => import('shared/header'));

const Navigation = ():JSX.Element => (
	<React.Suspense fallback={<span>loading...</span>}>
		<Header />
	</React.Suspense>
)

export default Navigation;