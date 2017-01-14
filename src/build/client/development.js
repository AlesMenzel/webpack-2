const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		bundle: [
			'react-hot-loader/patch',
			'webpack-hot-middleware/client',
			'./src/app/'
		]
	},
	output: {
		path: path.resolve(__dirname, '../../../public'),
		filename: '[name].js',
		publicPath: '/assets/'
	},
	module: {
		rules: [
			{
				test: /.js/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify("development")
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	devtool: 'source-map',
	target: 'web'
};
