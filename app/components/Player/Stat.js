var React = require('react');

var Stat = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Statssss</h3>
				<p>{this.props.stats}</p>
			</div>
		)
	}
});

module.exports = Stat;