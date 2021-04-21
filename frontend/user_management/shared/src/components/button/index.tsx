import React from 'react'
import { Link } from 'react-router-dom'

interface IButtonProps {
	name: string;
	to: string;
	isLink: boolean;
	width: string;
	type: "button" | "submit" | "reset" | undefined,
	marginTop: string;
}

const Button = ({
	name, 
	to = '', 
	isLink = false, 
	width = 'w-full', 
	type = undefined, 
	marginTop = 'mt-8'
}: IButtonProps): JSX.Element => {
	if (isLink) {
		return (
			<button className={`${width} h-10 bg-primary ${marginTop}`}>
				<Link className="font-primary text-white text-lg" to={to}>{name}</Link>
			</button>
		)	
	}

	return (
		<button type={type} className={`${width} h-10 bg-primary {marginTop} font-primary text-white text-lg`}>
			{name}
		</button>
	)
}

export default Button;