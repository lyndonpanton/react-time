import React from "react";

class Pomodoro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className="pomodoro">
				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">0</div>
					<div className="arrow-down"></div>
				</div>

				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">0</div>
					<div className="arrow-down"></div>
				</div>

				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">0</div>
					<div className="arrow-down"></div>
				</div>

				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">0</div>
					<div className="arrow-down"></div>
				</div>

				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">0</div>
					<div className="arrow-down"></div>
				</div>

				<div className="column">
					<div className="arrow-up"></div>
					<div className="digit">0</div>
					<div className="arrow-down"></div>
				</div>
			</div>
		);
	} 
}

export default Pomodoro;