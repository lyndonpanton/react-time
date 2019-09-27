import React from "react";
import Digital from "./Digital";
import Watch from "./Watch";
import "./index.css";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Watch />
				<Digital />
			</div>
		);
	}
}

export default App;