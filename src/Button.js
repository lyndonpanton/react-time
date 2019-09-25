import React from "react";

const Button = (props) => {
	return (
		<button className={props}>
			{props.type}
		</button>
	);
}

export default Button;