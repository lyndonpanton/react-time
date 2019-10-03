import React from "react";
import Button from "./Button";

class Pomodoro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			secondOne: 0,
			secondTen: 0,
			minuteOne: 0,
			minuteTen: 0,
			hourOne: 0,
			hourTen: 0
		};
	}

	add = (digit) => {
		const current = this.state[digit];
		if (current < 5) {
			this.setState({
				[digit]: current + 1
			});
		} else if ((digit.slice(digit.length - 3, digit.length) !== "Ten" || digit === "hourTen") && current < 9) {
			this.setState({
				[digit]: current + 1
			});
		}
	}

	countdown = (digit) => {
		if (!this.minus(digit)) {
			switch(digit) {
				case "secondOne":
					this.minus("secondTen");
					break;
				case "secondTen":
					this.resetDigit("secondOne");
					this.minus("minuteOne");
					break;
				case "minuteOne":
					this.resetDigit("secondTen");
					this.minus("minuteTen");
					break;
				case "minuteTen":
					this.resetDigit("minuteOne");
					this.minus("hourOne");
					break;
				case "hourOne":
					this.resetDigit("minuteTen");
					this.minus("hourTen");
					break;
				case "hourTen":
					this.resetDigit("hourOne");
					this.minus("hourOne");
					this.stop();
					break;
				default:
					this.stop();
					break;
			}
		}

		const digits = this.state;
		let sum = 0;
		for (let prop in digits) {
			sum = sum + digits[prop];
		}
		console.log(sum);
		if (sum === 0) {
			this.stop();
		}
	}

	minus = (digit) => {
		const current = this.state[digit];
		if (current > 0) {
			this.setState({
				[digit]: current - 1
			});

			return true;
		} else {
			return false;
		}
	}

	resetDigit = (digit) => {
		if ((digit.slice(digit.length - 3, digit.length) !== "Ten" || digit === "hourTen")) {
			this.setState({
				[digit]: 9
			});
		} else {
			this.setState({
				[digit]: 5
			});
		}
	}

	stop = () => {
		clearInterval(this.timer);
		this.timer = undefined;
	}

	tick = () => {
		if (this.timer === undefined) {
	 		this.timer = setInterval(() => {
				this.countdown("secondOne");
			}, 1000);
		} else {
			this.stop();
		}
	}

	render() {
		return (
			<div className="pomodoro">
				<div className="pomodoro-clock">
					<div className="column">
						<div className="arrow-up" tabIndex="0" onClick={() => this.add("hourTen")}></div>
						<div className="digit">{this.state.hourTen}</div>
						<div className="arrow-down" tabIndex="0" onClick={() => this.minus("hourTen")}></div>
					</div>

					<div className="column">
						<div className="arrow-up" tabIndex="0" onClick={() => this.add("hourOne")}></div>
						<div className="digit">{this.state.hourOne}</div>
						<div className="arrow-down" tabIndex="0" onClick={() => this.minus("hourOne")}></div>
					</div>

					<div className="column">
						<div className="arrow-up" tabIndex="0" onClick={() => this.add("minuteTen")}></div>
						<div className="digit">{this.state.minuteTen}</div>
						<div className="arrow-down" tabIndex="0" onClick={() => this.minus("minuteTen")}></div>
					</div>

					<div className="column">
						<div className="arrow-up" tabIndex="0" onClick={() => this.add("minuteOne")}></div>
						<div className="digit">{this.state.minuteOne}</div>
						<div className="arrow-down" tabIndex="0" onClick={() => this.minus("minuteOne")}></div>
					</div>

					<div className="column">
						<div className="arrow-up" tabIndex="0" onClick={() => this.add("secondTen")}></div>
						<div className="digit">{this.state.secondTen}</div>
						<div className="arrow-down" tabIndex="0" onClick={() => this.minus("secondTen")}></div>
					</div>

					<div className="column">
						<div className="arrow-up" tabIndex="0" onClick={() => this.add("secondOne")}></div>
						<div className="digit">{this.state.secondOne}</div>
						<div className="arrow-down" tabIndex="0" onClick={() => this.minus("secondOne")}></div>
					</div>
				</div>

				<Button type="countdown" handleClick={() => this.tick()} />
			</div>
		);
	} 
}

export default Pomodoro;