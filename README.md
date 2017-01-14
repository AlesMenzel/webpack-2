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
* *TODO: Sequelize with PostgreSQL*
* *TODO: Redis for sessions/caching*
* *TODO: MongoDB with Mongoose*
* *TODO: Passportjs for authentication*
* *TODO: Production ready build config*
* *TODO: Prepare testing with Mocha, Sinon*

## Deploy
* *TODO: Setup deploy to Heroku*

## Issues
When running `npm run dev` and changing frontend, you are not able to hard reload the page (F5) because server packing webpack ignores client folder (`./src/app`) in order for webpack-dev-middleware load it in memory and serve it via hot reload. Server restart would just discard all in memory changes.
To hard refresh, either run `npm run build:server:dev` to get the server up to date, or restart the process.
