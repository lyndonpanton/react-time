import React from "react";
import Button from "./Button";

class Watch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			secondOne: 0,
			secondTen: 0,
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

	resetDigits = () => {
		for (let digit in this.state) {
			this.setState({
				[digit]: 0
			});
		}
	}

	setDigit = (digit) => {
		if (digit.slice(digit.length -3, digit.length) === "Ten" && digit === "hourTen" && this.state[digit] > 4) {
			this.setState({
				[digit]: 0
			});

			this.resetDigit(digit);
		} else if (this.state[digit] < 9) {
			this.setState({
				[digit]: this.state[digit] + 1
			});
		} else {
			this.resetDigit(digit);
		}
	}

	resetDigit = (digit) => {
		this.setState({
			[digit]: 0
		});

		switch(digit) {
			case "secondOne":
				this.setDigit("secondTen");
				break;
			case "secondTen":
				this.setDigit("minuteOne");
				break;
			case "minuteOne":
				this.setDigit("minuteTen");
				break;
			case "minuteTen":
				this.setDigit("hourOne");
				break;
			case "hourOne":
				this.setDigit("hourTen");
				break;
			case "hourTen":
				// clock reset/stop logic
				this.resetDigits();
				// this.stopDigits();
				break;
		}
	}

	stopDigits = () => {
		clearInterval(this.timer);
		this.resetDigits();
	}

	tick = () => {
		this.setDigit("secondOne");
	}

	render() {
		return (
			<div className="watch">
				<div className="time">
					<div className="hours">
						<span className="hour">{this.state.hourTen}</span>
						<span className="hour">{this.state.hourOne}</span>
					</div>
					<div className="minutes">
						<span className="minute">{this.state.minuteTen}</span>
						<span className="minute">{this.state.minuteOne}</span>
					</div>
					<div className="seconds">
						<span className="second">{this.state.secondTen}</span>
						<span className="second">{this.state.secondOne}</span>
					</div>
				</div>

				<Button type="start" />
				<Button type="stop" />
				<Button type="reset" />
				<Button type="record" />
			</div>
		);
	}
}

export default Watch;