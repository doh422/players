var React = require('react');
var Router = require('react-router');

var SearchPlayer = React.createClass({
	mixins: [Router.History],
	getRef: function(ref) {
		this.nameRef = ref;
	},

	handleSubmit: function() {
		var name = this.nameRef.value;
		this.nameRef.value = '';
		// push state allows us to transition to new route
		this.history.pushState(null, "profile/" + name);
	},

	render: function() {
		return (
			<div className="col-sm-12">
				<form onClick={this.handleSubmit}>
					<div className="form-group col-sm-7">
						<input type="text" className="form-control" ref={this.getRef} />
					</div>
					<div className="form-group col-sm-5">
						<button type="submit" className="btn btn-block btn-primary">Search Player</button>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = SearchPlayer;