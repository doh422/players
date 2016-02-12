var React = require('react');
var ReactRouter = require('react-router');

var SearchPlayer = React.createClass({
	mixins: [Router.History],
	getRef: function(ref) {
		this.nameRef = ref;
	},

	render: function() {
		return (
			<div className="col-sm-12">
				<form onClick={this.handleSubmit}>
					<div className="form-group col-sm-7">
						<input type="text" className="form-control" ref={this.getRef} />
					</div>
					<div className="form-group col-sm-5">
						<button type="submit" className="btn btn-block btn-primary">Search Player>/button>
					</div>
				</form>
			</div>
		)
	}
})