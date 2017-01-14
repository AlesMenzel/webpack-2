# Webpack 2 Sample App
This is a sample application featuring the most up to date and bleeding edge technology currently available.
This project also aims to provide cross platform support.

## Lang
* Babel - ES6/7
* Webpack 2.2.0-rc4

## Frontend
Frontend is compiled via Webpack
* [React](https://github.com/facebook/react)
* [Redux](http://redux.js.org/)
* [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension)
* *TODO: Thunk middleware*
* *TODO: CSS, POSTCSS, SASS loaders*
* *TODO: Image/File loaders*
* *TODO: Add a favicon loader + sample favicon :-)*
* *TODO: Icons*
* *TODO: Production ready build config*
* *TODO: Extract external libraries from bundle and include them from a CDN*
* *TODO: Prepare testing with Jest*

## Backend
Backend is compiled via Webpack. Support for all common platforms (Windows, Unix, Mac).
* [Express](http://expressjs.com/)
* [Server Side Rendering React/Redux](http://redux.js.org/docs/recipes/ServerRendering.html)
* [Webpack Dev](https://github.com/webpack/webpack-dev-middleware)/[Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* [Nodemon](https://github.com/remy/nodemon) - automatic restarting
* [Sequelize with PostgreSQL](http://docs.sequelizejs.com/en/v3/)
* *TODO: Sequelize: migrations, seeders/fixtures *
* [Redis for sessions and caching](https://github.com/NodeRedis/node_redis)
* *TODO: Redis: Caching service*
* *TODO: MongoDB with Mongoose*
* *TODO: Passportjs for authentication*
* *TODO: Production ready build config*
* *TODO: Prepare testing with Mocha, Sinon*

## Deploy
* *TODO: Setup deploy to Heroku*

## Project Strucure
TODO

## NPM Scripts
TODO

## Sequelize Migrations
* Create a new migration: `sequelize migration:create --name migration-name`
* Run pending migrations: `sequelize db:migrate`
* Downgrade: `sequelize db:migrate:undo`

## Issues
When running `npm run dev` and changing frontend, you are not able to hard reload the page (F5) because server packing webpack ignores client folder (`./src/app`) in order for webpack-dev-middleware load it in memory and serve it via hot reload. Server restart would just discard all in memory changes.
To hard refresh, either run `npm run build:server:dev` to get the server up to date, or restart the process.
