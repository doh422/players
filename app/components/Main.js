var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
	render: function() {
		return (
			<h1>Players</h1>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));