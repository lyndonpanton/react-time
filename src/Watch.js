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

	setDigit = (digit) => {
		if (this.state[digit] < 9) {
			this.setState({
				[digit]: this.state[digit] + 1
			});
		} else {
			this.setState({
				[digit]: 0
			});
		}
	}

	tick = () => {
		setDigit("secondOne");
	}

	render() {

	}
}

export default Watch;