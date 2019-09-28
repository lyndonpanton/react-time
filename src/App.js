import React from "react";
import Header from "./Header";
import Analog from "./Analog";
import Digital from "./Digital";
import Pomodoro from "./Pomodoro";
import Stop from "./Stop";
import Footer from "./Footer";
import "./index.css";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "Lyndon Panton",
			rights: "All Rights Reserved",
			year: (new Date()).getFullYear(),
			tabs: {
				analog: false,
				digital: true,
				pomodoro: false,
				stop: false
			}
		};
	}

	openTab = (event) => {
		for (let tab in this.state.tabs) {
			if (tab === event.target.textContent.toLowerCase()) {
				let open = document.getElementsByClassName(tab)[0];
				open.style.display = "block";

				let tabs = this.state.tabs;
				tabs[tab] = true;
				this.setState({
					tabs: tabs
				})
			} else {
				let close = document.getElementsByClassName(tab)[0];
				console.log(close);
				close.style.display = "none";

				let tabs = this.state.tabs;
				tabs[tab] = true;
				this.setState({
					tabs: tabs
				})
			}
		}
	}

	render() {
		const author = this.state.author;
		const rights = this.state.rights;
		const year = this.state.year;

		return (
			<div className="app">
				<Header tabs={this.state.tabs} handleClick={this.openTab} />
				<main>
					<Analog />
					<Digital />
					<Pomodoro />
					<Stop />
				</main>
				<Footer author={author} rights={rights} year={year} />
			</div>
		);
	}
}

export default App;