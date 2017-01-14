import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

class About extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>About view</h1>
				<p>Just a sample. Read the project README :-) YUP</p>
				<Link to="/">Back</Link>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(About);
