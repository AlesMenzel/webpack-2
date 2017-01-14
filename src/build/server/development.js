const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		index: './',
		bundle: './src/app'
	},
	output: {
		path: path.resolve(__dirname, '../../../server'),
		filename: '[name].js'
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
			'process.env': { NODE_ENV: JSON.stringify("development") }
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.WatchIgnorePlugin([
			path.resolve(__dirname, '../../app'),
		]),
	],
	externals: [nodeExternals(), './src/app'],
	devtool: 'source-map',
	target: 'node'
};
