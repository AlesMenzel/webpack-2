import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './container/root';

const root = document.getElementById('root');

ReactDOM.render(
	<AppContainer>
		<Root />
	</AppContainer>,
	root
);

if (module.hot) {
	module.hot.accept('./container/root', () => {
		ReactDOM.render(
			<AppContainer>
				<Root />
			</AppContainer>,
			root
		);
	});
}
