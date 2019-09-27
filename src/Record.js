import React from "react";

const Record = (props) => {
	const records = props.records.map(function(record, index) {
		return (
			<div key={index} className="record">
				<span className="recordIndex">{index + 1}</span>
				<span className="recordTime">
					{record.hourTen}{record.hourOne} : 
					{record.minuteTen}{record.minuteOne} :
					{record.secondTen}{record.secondOne} :
					{record.millisecondTen}{record.millisecondOne}
				</span>
			</div>
		);
	});

	return (
		<div className="records">{records}</div>
	);
}

export default Record;