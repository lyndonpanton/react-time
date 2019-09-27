import React from "react";
import Header from "./Header";
import Digital from "./Digital";
import Watch from "./Watch";
import "./index.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "Lyndon Panton",
			rights: "All Rights Reserved",
			symbol: "&#168",
			year: (new Date()).getFullYear()
		};
	}

	render() {
		return (
			<div className="app">
				<Header />
				<Watch />
				<Digital />
			</div>
		);
	}
}

export default App;