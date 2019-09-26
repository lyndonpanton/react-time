import React from "react";

class Digital extends React.Component {
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

	tick = () => {
		const seconds = String((new Date()).getSeconds());
		const minutes = String((new Date()).getMinutes());
		const hours = String((new Date()).getHours());

		if (seconds.length > 1) {
			this.setState({
				secondOne: seconds[1],
				secondTen: seconds[0]
			});
		} else {
			this.setState({
				secondOne: seconds[0],
				secondTen: 0
			});
		}

		if (minutes.length > 1) {
			this.setState({
				minuteOne: minutes[1],
				minuteTen: minutes[0]
			});
		} else {
			this.setState({
				minuteOne: minutes[0],
				minuteTen: 0
			});
		}

		if (hours.length > 1) {
			this.setState({
				hourOne: hours[1],
				hourTen: hours[0]
			});
		} else {
			this.setState({
				hourOne: hours[0],
				hourTen: 0
			});
		}
	}

	render() {
		return (
			<div className="digital">
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
			</div>
		);
	}
}

export default Digital;