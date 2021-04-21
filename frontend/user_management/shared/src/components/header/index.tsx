import React from 'react'

const Header = () => (
	<header className="fixed w-full z-10">
		<nav className="bg-primary">
			<ul className="flex h-14 justify-between items-center md:container md:mx-auto">
				<li className="text-white font-primary">
					Home
				</li>
				<li className="text-white font-primary">
					Login
				</li>
			</ul>
		</nav>
	</header>
)

export default Header;