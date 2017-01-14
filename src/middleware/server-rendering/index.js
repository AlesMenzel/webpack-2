import React from  'react';
import { createStore, combineReducers } from  'redux';
import { Provider } from  'react-redux';
import { renderToString } from  'react-dom/server';
import { RouterContext, match } from  'react-router';

import reducers from '../../app/reducer';
import routes from '../../app/router/routes';

export default (app) => {
	app.get('*', (req, res) => {
		match({routes, location: req.url}, (err, redirect, props) => {
			if (err) {
				res.status(500).send(err.message)
			} else if (redirect) {
				res.redirect(redirect.pathname + redirect.search)
			} else if (props) {
				res.render('index', renderPage(props));
			} else {
				res.status(404).render('error', {status: 404});
			}
		})
	})
};

const renderPage = (props) => {
	// Create a new Redux store instance
	const store = createStore(combineReducers({...reducers}));

	// Render the component to a string
	const html = renderToString(
		<Provider store={store}>
			<RouterContext {...props}/>
		</Provider>
	);

	// Grab the initial state from our Redux store
	const state = JSON.stringify(store.getState());

	// Send the rendered page back to the client
	return {
		html,
		state
	};
};
