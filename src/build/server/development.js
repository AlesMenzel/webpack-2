const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		index: './index'
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
			'process.env.NODE_ENV': JSON.stringify("development")
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.WatchIgnorePlugin([
			path.resolve(__dirname, '../../app'),
			path.resolve(__dirname, '../../build'),
			path.resolve(__dirname, '../../fixtures'),
		]),
	],
	externals: [nodeExternals()],
	devtool: 'source-map',
	context: path.resolve(__dirname, '../../../'),
	node: {
		__filename: true,
		__dirname: true
	},
	target: 'node'
};
