import React from "react";
import Header from "./Header";
import Digital from "./Digital";
import Watch from "./Watch";
import "./index.css";

class App extends React.Component {
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