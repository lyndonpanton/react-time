import React from "react";

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

	render() {
		return (
			<div className="pomodoro">
				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">{this.state.hourTen}</div>
					<div className="arrow-down"></div>
				</div>

				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">{this.state.hourOne}</div>
					<div className="arrow-down"></div>
				</div>

				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">{this.state.minuteTen}</div>
					<div className="arrow-down"></div>
				</div>

				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">{this.state.minuteOne}</div>
					<div className="arrow-down"></div>
				</div>

				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">{this.state.secondTen}</div>
					<div className="arrow-down"></div>
				</div>

				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">{this.state.secondOne}</div>
					<div className="arrow-down"></div>
				</div>
			</div>
		);
	} 
}

export default Pomodoro;