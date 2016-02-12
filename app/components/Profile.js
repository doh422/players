var React = require('react');
var Router = require('react-router');
var Player = require('./Player/Player');
var Stat = require('./Player/Stat');
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({
	// mixin: [ReactFireMixin],
	getInitialState: function() {
		return {
			bio: {},
			stats: [1,2,3]
		}
	},

	componentDidMount: function() {
		console.log('mounted');
	},

	render: function() {
		return (
			<div className="row">
				<div className="col-md-6">
					<Player name={this.props.params.name} bio={this.state.bio} />
				</div>
				<div className="col-md-6">
					<Stat name={this.props.params.name} stats={this.state.stats} />
				</div>
			</div>
		)
	}
});

module.exports = Profile;