import React from 'react'

const Button = React.lazy(() => import('shared/button'));

const Home = () => (
	<section className="grid grid-cols-2 gap-4 place-items-center h-screen">
		<aside>
				{/* <h1 class="text-primary text-7xl font-primary leading-tight">You're logged in! Welcome {user?.firstName}</h1> */}
				<h1 className="text-primary text-7xl font-primary leading-tight">Login to see what is behind the curtain</h1>
			
			<Button width="w-32" to="/login/" isLink name="Log in" />
		</aside>
		{/* <Image src="home.png" alt="home" className="shadow-md" /> */}
	</section>
)

export default Home;