import React from "react";

const Footer = (props) => {
	// add necessary credits
	return (
		<footer>
			<p className="copyright">
				<span className="symbol">{props.symbol} </span> 
				<span className="year"> {props.year} </span> 
				<span className="author"> {props.author} | </span>
				<span className="rights"> {props.rights}</span>
			</p>
			<p className="credits">

			</p>
		</footer>
	);
};

export default Footer;