var React = require('react');
var Router = require('react-router');
var Player = require('./Player/Player');
var Stat = require('./Player/Stat');

var Profile = React.createClass({

	getInitialState: function() {
		return {
			bio: {},
			stats: {}
		}
	},

	render: function() {
		return (
			<div className="row">
				<div className="col-md-6">
					<Player />
				</div>
				<div className="col-md-6">
					<Stat />
				</div>
			</div>
		)
	}
});

module.exports = Profile;