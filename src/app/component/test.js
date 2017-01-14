import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as action from '../action'

class Test extends Component {

	constructor(props) {
		super(props);
		this.state = {todoName: ''};
	}
	
	onTodoNameChange(event) {
		this.setState({todoName: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.todoName.length === 0)
			alert('Provide a name please');
		this.props.addTodo(this.state.todoName);
	}

	render() {
		return (
			<div>
				This is just a sample for you!
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" value={this.state.todoName} onChange={this.onTodoNameChange.bind(this)} />
					<input type="submit" value="Add item!" />
				</form>
				<ul>
				{this.props.todos.map((todo, index) => {
					return (
						<li key={index}>{todo.name}</li>
					);
				})}
				</ul>
				<Link to="/about">About page</Link>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		todos: state.app.todos
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addTodo: (name) => {
			dispatch(action.addTodo(name))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Test);
