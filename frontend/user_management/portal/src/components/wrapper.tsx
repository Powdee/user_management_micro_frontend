import React from 'react';

const Layout = React.lazy(() => import('shared/layout'));

const Wrapper = () => (
	<React.Suspense fallback={<span>loading...</span>}>
		<Layout>
			Ahoj
		</Layout>
	</React.Suspense>
)

export default Wrapper;