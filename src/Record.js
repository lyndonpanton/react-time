import React from "react";

const Record = (props) => {
	const records = props.records.map(function(record, index) {
		return (
			<div key={index} className="record">
				<span className="recordIndex">{index + 1}</span>
				<div className="recordTime">
					<span className="hour">{record.hourTen}{record.hourOne}:</span>
					<span className="minute">{record.minuteTen}{record.minuteOne}:</span>
					<span className="second">{record.secondTen}{record.secondOne}:</span>
					<span className="millsecond">{record.millisecondHundred}{record.millisecondTen}</span>
				</div>
				<button>Delete</button>
			</div>
		);
	});

	return (
		<div className="records">{records}</div>
	);
}

export default Record;