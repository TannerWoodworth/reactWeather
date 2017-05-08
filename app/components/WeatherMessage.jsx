var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<p className="text-center stat">It is <span className="important">{temp}</span> in <span className="important">{location}</span></p>
		</div>
	)
};

module.exports = WeatherMessage;