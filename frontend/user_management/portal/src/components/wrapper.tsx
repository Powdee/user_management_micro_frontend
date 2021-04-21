import React from 'react';

const Layout = React.lazy(() => import('shared/layout'));

const Wrapper: React.FC = ({ children }) => (
	<React.Suspense fallback={<span>loading...</span>}>
		<Layout>
			{children}
		</Layout>
	</React.Suspense>
)

export default Wrapper;