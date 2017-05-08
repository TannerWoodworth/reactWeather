var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<strong>It is {temp} in {location}</strong>
		</div>
	)
};

module.exports = WeatherMessage;