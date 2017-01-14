import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import Router from '../router';
import store from '../store';

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}
