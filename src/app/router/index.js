import React, { Component, PropTypes } from 'react';
import { Router as ReactRouter, browserHistory } from 'react-router';

import routes from '../router/routes';

export default class Router extends Component {
	render() {
		/*
		key={ Math.rand() } is a temporary fix till it gets fixed:
		 https://github.com/gaearon/react-hot-loader/issues/298
		 */
		return (
			<ReactRouter history={browserHistory} key={Math.random()}>
				{routes}
			</ReactRouter>
		);
	}
}

