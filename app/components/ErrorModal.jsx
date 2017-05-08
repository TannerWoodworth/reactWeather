var React = require('react');

var ErrorModal = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'Oh no!'
		};
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount: function() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		var {title, message} = this.props;

		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h2>{title}</h2>
				<p>{message}</p>
				<button className="hollow button" data-close="">Darn, okay!</button>
			</div>
		);
	}
});

module.exports = ErrorModal;