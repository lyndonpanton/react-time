import React from "react";

class Digital extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			day: "---",
			date: "--",
			month: "---",
			year: "----",
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
		let date = String((new Date()).getDate());
		const day = String((new Date()).getDay());
		const month = String((new Date()).getMonth() + 1);
		const year = String((new Date()).getFullYear());

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

		switch (day) {
			case "1":
				this.setState({
					day: "Monday"
				});
				break;
			case "2":
				this.setState({
					day: "Tuesday"
				});
				break;
			case "3":
				this.setState({
					day: "Wednesday"
				});
				break;
			case "4":
				this.setState({
					day: "Thursday"
				});
				break;
			case "5":
				this.setState({
					day: "Friday"
				});
				break;
			case "6":
				this.setState({
					day: "Saturday"
				});
				break;
			case "7":
				this.setState({
					day: "Sunday"
				});
				break;
			default:
				console.log("an error occured");
				break;
		}

		if (date === 1) {
			date = date + "st";
		} else if (date === 2) {
			date = date + "nd";
		} else if (date === 3) {
			date = date + "rd";
		} else {
			date = date + "th";
		}

		this.setState({
			date: date.length > 1 ? date : "0" + date
		});

		switch (month) {
			case "1":
				this.setState({
					month: "January"
				});
				break;
			case "2":
				this.setState({
					month: "February"
				});
				break;
			case "3":
				this.setState({
					month: "March"
				});
				break;
			case "4":
				this.setState({
					month: "April"
				});
				break;
			case "5":
				this.setState({
					month: "May"
				});
				break;
			case "6":
				this.setState({
					month: "June"
				});
				break;
			case "7":
				this.setState({
					month: "July"
				});
				break;
			case "8":
				this.setState({
					month: "August"
				});
				break;
			case "9":
				this.setState({
					month: "September"
				});
				break;
			case "10":
				this.setState({
					month: "October"
				});
				break;
			case "11":
				this.setState({
					month: "November"
				});
				break;
			case "12":
				this.setState({
					month: "December"
				});
				break;
			default:
				console.log("an error occured");
				break;
		}

		this.setState({
			year: year
		});
	}

	render() {
		return (
			<div className="digital">
				<div className="time">
					<div className="hours">
						<span className="hour">{this.state.hourTen}</span>
						<span className="hour">{this.state.hourOne}</span>
					</div>
					<span className="colon">:</span>
					<div className="minutes">
						<span className="minute">{this.state.minuteTen}</span>
						<span className="minute">{this.state.minuteOne}</span>
					</div>
					<span className="colon">:</span>
					<div className="seconds">
						<span className="second">{this.state.secondTen}</span>
						<span className="second">{this.state.secondOne}</span>
					</div>
				</div>
				<div className="today">
					<span className="day">{this.state.day} </span>
					<span className="date">{this.state.date} </span>
					<span className="month">{this.state.month} </span>
					<span className="year">{this.state.year} </span>
				</div>
			</div>
		);
	}
}

export default Digital;