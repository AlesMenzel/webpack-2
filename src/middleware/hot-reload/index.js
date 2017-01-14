const webpack = require('webpack');
const webpackConfig = require('../../build/client/development.js');
const compiler = webpack(webpackConfig);

export default (app) => {
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		quiet: true,
		publicPath: webpackConfig.output.publicPath,
		reporter: null, // Custom debug messages
		serverSideRender: false,
		historyApiFallback: true,
	}));

	app.use(require('webpack-hot-middleware')(compiler));
};
