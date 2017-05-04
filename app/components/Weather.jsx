var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
	render: function() {
		return (
			<div>
				<p>Weather component</p>
				<WeatherForm/>
				<WeatherMessage/>
			</div>
		)
	}
});

module.exports = Weather;