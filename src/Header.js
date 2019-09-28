import React from "react";

const Header = (props) => {
	return (
		<header>
			<nav>
				<ul>
					<li onClick={(event) => props.handleClick(event)}>Analog</li>
					<li onClick={(event) => props.handleClick(event)}>Digital</li>
					<li onClick={(event) => props.handleClick(event)}>Pomodoro</li>
					<li onClick={(event) => props.handleClick(event)}>Stop</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;