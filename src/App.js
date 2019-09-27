import React from "react";
import Header from "./Header";
import Digital from "./Digital";
import Watch from "./Watch";
import Footer from "./Footer";
import "./index.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "Lyndon Panton",
			rights: "All Rights Reserved",
			year: (new Date()).getFullYear()
		};
	}

	render() {
		const author = this.state.author;
		const rights = this.state.rights;
		const year = this.state.year;

		return (
			<div className="app">
				<Header />
				<main>
					<Watch />
					<Digital />
				</main>
				<Footer author={author} rights={rights} year={year} />
			</div>
		);
	}
}

export default App;