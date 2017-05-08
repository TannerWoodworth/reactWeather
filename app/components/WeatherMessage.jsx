var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<p className="text-center stat">It is {temp} in {location}</p>
		</div>
	)
};

module.exports = WeatherMessage;