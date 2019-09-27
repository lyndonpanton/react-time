import React from "react";

class Record extends React.Component {
	render() {
		return (
			<div className="record">
				<div className="hours">
					<span className="hour">{this.props.hourTen}</span>
					<span className="hour">{this.props.hourOne}</span>
				</div>
				<div className="minutes">
					<span className="minute">{this.props.minuteTen}</span>
					<span className="minute">{this.props.minuteOne}</span>
				</div>
				<div className="seconds">
					<span className="second">{this.props.secondTen}</span>
					<span className="second">{this.props.secondOne}</span>
				</div>
				<div className="milliseconds">
					<span className="millisecond">{this.props.millisecondTen}</span>
					<span className="millisecond">{this.props.millisecondOne}</span>
				</div>
			</div>
		);
	}
}

export default React;