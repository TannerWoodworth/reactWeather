var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(loc) {
		var that = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(loc).then(function(temp) {
			that.setState({
				location: loc,
				temp: temp,
				isLoading: false
			})
		}, function(errorMessage) {
			that.setState({isLoading: false});
			alert(errorMessage);
		})
	},
	render: function() {
		var {isLoading, temp, location} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <p>Signaling data monkeys...</p>
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		return (
			<div>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;