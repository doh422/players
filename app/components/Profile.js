var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({

	getInitialState: function() {
		return {
			bio: {},
			stats: {}
		}
	},

	render: function() {
		return (
			<h1>Profiles</h1>
		)
	}
});

module.exports = Profile;