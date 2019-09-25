import React from "react";
import Button from "./Button";

class Watch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: [
				0,
				0
			],
			minutes: [
				0,
				0
			],
			hours: [
				0,
				0
			]
		}
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick();
		}, 1000)
	}

	tick = () => {

	}

	render() {

	}
}

export default Watch;