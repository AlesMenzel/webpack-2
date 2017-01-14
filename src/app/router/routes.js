import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Views
import App from '../container/app';
import Test from '../component/test';
import About from '../component/about';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Test} />
		<Route path="about" component={About} />
	</Route>
);
