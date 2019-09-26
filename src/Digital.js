import React from "react";

class Digital extends React.Component {
	render() {
		return (
			<div className="digital">
				<div className="time">
					<div className="hours">
						<span className="hour">{}</span>
						<span className="hour">{}</span>
					</div>
					<div className="minutes">
						<span className="minute">{}</span>
						<span className="minute">{}</span>
					</div>
					<div className="seconds">
						<span className="second">{}</span>
						<span className="second">{}</span>
					</div>
					<div className="milliseconds">
						<span className="millisecond">{}</span>
						<span className="millisecond">{}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Digital;