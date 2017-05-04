var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var {temp, location} = this.props;

		return (
			<div>
				<strong>It is {temp} in {location}</strong>
			</div>
		)
	}
});

module.exports = WeatherMessage;