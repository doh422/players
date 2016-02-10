var React = require('react');

var Main = React.createClass({
	render: function() {
		return (
			<div className="main-container">
				<h1>Players</h1>
				<div className="col-md-10">
					{this.props.children}
				</div>
			</div>
		)
	}
});

module.exports = Main;