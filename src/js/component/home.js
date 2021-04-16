import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { PropTypes } from "prop-types";
//create your first component
export function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="timer">
				<i className="fas fa-user-clock"></i>
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
