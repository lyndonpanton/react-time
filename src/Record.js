import React from "react";
import Button from "./Button";

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
				<Button type="remove" handleClick={() => {
					props.removeRecord(index)
				}}/>
			</div>
		);
	});

	return (
		<div className="records">{records}</div>
	);
}

export default Record;