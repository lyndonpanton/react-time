import React from "react";

const Header = (props) => {
	return (
		<header>
			<nav>
				<ul>
					<li onClick={(event) => props.openTab(event.target)}>Analog</li>
					<li onClick={(event) => props.openTab(event.target)}>Digital</li>
					<li onClick={(event) => props.openTab(event.target)}>Pomodoro</li>
					<li onClick={(event) => props.openTab(event.target)}>Stop</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;