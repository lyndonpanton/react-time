import React from "react";
import Button from "./Button";

class Watch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			secondOne: 0,
			secondTen: 0
			minuteOne: 0,
			minuteTen: 0,
			hourOne: 0,
			hourTen: 0
		}
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick();
		}, 1000);
	}

	tick = () => {
		if (this.state.secondOne[0] < 9) {
			this.setState({
				secondOne: this.state.secondOne + 1
			});
		} else {
			this.setState({
				secondOne: 0
			});
		}

		if (this.setState.secondTen < 9) {
			this.setState({
				secondTen: this.state.secondTen + 1
			});
		} else {
			this.setState({
				secondTen: 0
			});
		}

		if (this.setState.minuteOne < 9) {
			this.setState({
				minuteOne: this.state.minuteOne + 1
			});
		} else {
			this.setState({
				minuteOne: 0
			});
		}

		if (this.setState.minuteTen < 9) {
			this.setState({
				minuteTen: this.state.minuteTen + 1
			});
		} else {
			this.setState({
				minuteTen: 0
			});
		}

		if (this.setState.hourOne < 9) {
			this.setState({
				hourOne: this.state.hourOne + 1
			});
		} else {
			this.setState({
				hourOne: 0
			});
		}

		if (this.setState.hourTen < 9) {
			this.setState({
				hourTen: this.state.hourTen + 1
			});
		} else {
			this.setState({
				hourTen: 0
			});
		}
	}

	render() {

	}
}

export default Watch;