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

	resetDigits = () => {
		for (let digit in this.state) {
			this.setState({
				[digit]: 0
			});
		}
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

			switch(digit) {
				"secondOne":
					this.setDigit("secondTen");
					break;
				"secondTen":
					this.setDigit("minuteOne");
					break;
				"minuteOne":
					this.setDigit("minuteTen");
					break;
				"minuteTen":
					this.setDigit("hourOne");
					break;
				"hourOne":
					this.setDigit("hourTen");
					break;
				"hourTen":
					// clock reset/stop logic
					this.resetDigits();
					break;
			}
		}
	}

	tick = () => {
		this.setDigit("secondOne");
	}

	render() {
		return (
			<div className="watch">
				<div className="time">
					<div className="seconds">
						<span className="second">{this.state.secondOne}</span>
						<span className="second">{this.state.secondTen}</span>
					</div>
					<div className="minutes">
						<span className="minute">{this.state.minuteOne}</span>
						<span className="minute">{this.state.minuteTen}</span>
					</div>
					<div className="hours">
						<span className="hour">{this.state.hourOne}</span>
						<span className="hour">{this.state.hourTen}</span>
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