var React = require('react');

var ErrorModal = React.createClass({
	componentDidMount: function() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h2>Title</h2>
				<p>Our Error Message</p>
				<button className="hollow button" data-close="">Darn, okay!</button>
			</div>
		);
	}
});

module.exports = ErrorModal;