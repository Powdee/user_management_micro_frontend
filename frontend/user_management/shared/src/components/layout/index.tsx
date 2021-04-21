import React from 'react'

const Layout = (props: any) => (
	<main className="md:container md:mx-auto">
		{props.children}
	</main>
)

export default Layout;