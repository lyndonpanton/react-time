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

	add = (digit) => {
		
	}

	minus = (digit) => {
		
	}

	tick = () => {
		
	}

	render() {
		return (
			<div className="pomodoro">
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
		);
	} 
}

export default Pomodoro;