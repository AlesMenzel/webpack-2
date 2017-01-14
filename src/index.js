const debug = require('debug')('app:server');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

import db from './helper/postgre';

const port = process.env.PORT || 3000;
const morganLog = process.env.NODE_ENV === 'production' ? 'short' : 'dev';

const application = () => {
	console.log('XY', process.env.DB_POSTGRE);
	const app = express();

	app.set('x-powered-by', false);
	app.set('view engine', 'pug');
	app.set('views', './src/views');

	// <!-- Webpack Dev/Hot Middleware
	if (process.env.NODE_ENV !== 'production') {
		require('./middleware/hot-reload').default(app);
	}
	// -->

	app.use(compression()); // GZip compression
	app.use(morgan(morganLog)); // Logging

	// Load routes - MUST be before server side render
	const routes = fs.readdirSync('src/route');
	for (const route of routes) {
		require('./route/' + route).default(app);
	}

	// <!-- Server side rendering
	if (!process.env.SERVER_SIDE_RENDERING) {
		require('./middleware/server-rendering').default(app);
	}
	// -->

	// Serving static content (images, css, files)
	app.use('/assets', express.static('public'));

	// Serves index.html when server side rendering is turned off
	app.get('/', (req, res) => {
		res.render('index', {html: null, state: false});
	});

	// Error handling middleware, MUST be last after routes and other middleware!
	app.use(function (err, req, res, next) {
		debug(err);
		if (process.env.NODE_ENV === 'production') {
			res.status(500).send('Internal Server Error');
		} else {
			res.status(500).send(err);
		}
	});

	// Start the server
	app.listen(port, () => {
		debug(`Running environment: ${process.env.NODE_ENV}`);
		debug(`Listening on port ${port}`);
	});

	/*
	 Synchronize postgre database (only creates new tables)
	 For modifying columns/data use migrations

	 Option for development: You can use { force: true } to drop and sync the whole schema
	 */
	db.sequelize.sync({force: process.env.FORCE_DROP});
};

export default application;
