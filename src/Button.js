import React from "react";

const Button = (props) => {
	return (
		<button className={props.type} onClick={() => props.handleClick()}>
			{props.type}
		</button>
	);
}

export default Button;