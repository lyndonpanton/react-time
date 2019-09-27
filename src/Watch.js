import React from "react";
import Button from "./Button";
import Record from "./Record";

class Watch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false,
			millisecondTen: 0,
			millisecondHundred: 0,
			secondOne: 0,
			secondTen: 0,
			minuteOne: 0,
			minuteTen: 0,
			hourOne: 0,
			hourTen: 0,
			records: []
		};
	}

	componentDidMount() {

	}

	clearDigits = () => {
		this.setState({
			records: []
		});
	}

	handleRecord = (record) => {
		const records = this.state.records;
		this.setState({
			records: records.concat([record])
		});
	}

	recordDigits = () => {
		this.handleRecord({
			millisecondTen: this.state.millisecondTen,
			millisecondHundred: this.state.millisecondHundred,
			secondOne: this.state.secondOne,
			secondTen: this.state.secondTen,
			minuteOne: this.state.minuteOne,
			minuteTen: this.state.minuteTen,
			hourOne: this.state.hourOne,
			hourTen: this.state.hourTen,
		});
	}

	removeRecord = (index) => {
		const records = this.state.records;

		this.setState({
			records: records.filter(function(record, recordIndex) {
				return index !== recordIndex;
			})
		});
	}

	resetDigit = (digit) => {
		this.setState({
			[digit]: 0
		});

		switch(digit) {
			case "millisecondTen":
				this.setDigit("millisecondHundred");
				break;
			case "millisecondHundred":
				this.setDigit("secondOne");
				break;
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
			default:
				this.resetDigits();
				console.log("an error occured");
				break;
		}
	}

	resetDigits = () => {
		for (let digit in this.state) {
			if (digit !== "running" && digit !== "records") {
				this.setState({
					[digit]: 0
				});
			}
		}
	}

	setDigit = (digit) => {
		if (digit.slice(digit.length -3, digit.length) === "Ten" && digit !== "hourTen" && digit !== "millisecondTen" && this.state[digit] > 4) {
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

	startDigits = () => {
		const running = this.state.running;

		if (running === false) {
			this.timer = setInterval(() => {
				this.tick();
			}, 10);
		}

		this.setState({
			running: true
		});
	}

	stopDigits = () => {
		clearInterval(this.timer);

		this.setState({
			running: false
		});
	}


	tick = () => {
		this.setDigit("millisecondTen");
	}

	render() {
		return (
			<div className="watch">
				<div className="time">
					<div className="hours">
						<span className="hour">{this.state.hourTen}</span>
						<span className="hour">{this.state.hourOne}:</span>
					</div>
					<div className="minutes">
						<span className="minute">{this.state.minuteTen}</span>
						<span className="minute">{this.state.minuteOne}:</span>
					</div>
					<div className="seconds">
						<span className="second">{this.state.secondTen}</span>
						<span className="second">{this.state.secondOne}:</span>
					</div>
					<div className="milliseconds">
						<span className="millisecond">{this.state.millisecondHundred}</span>
						<span className="millisecond">{this.state.millisecondTen}</span>
					</div>
				</div>

				<div className="buttons">
					<Button type="start" handleClick={() => this.startDigits()} />
					<Button type="stop" handleClick={() => this.stopDigits()} />
					<Button type="reset" handleClick={() => this.resetDigits()} />
					<Button type="record" handleClick={() => this.recordDigits()} />
					<Button type="clear" handleClick={() => this.clearDigits()} />
				</div>

				<Record records={this.state.records} removeRecord={this.removeRecord} />
			</div>
		);
	}
}

export default Watch;