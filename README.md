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
* Sequelize: [migrations](http://docs.sequelizejs.com/en/latest/docs/migrations/), [seeders](https://github.com/sequelize/cli)
* [Redis for sessions and caching](https://github.com/NodeRedis/node_redis)
* *TODO: Redis: Caching service*
* [MongoDB](https://docs.mongodb.com/manual/crud/) with [Mongoose](http://mongoosejs.com/docs/guide.html)
* *TODO: Passportjs for authentication*
* *TODO: Production ready build config*
* Testing with [Mocha](https://mochajs.org/#assertions), [Chai](), 
* *TODO: Extend testing with Sinon (stubs, spies), Istanbul (code coverage)*

## Deploy
* *TODO: Setup deploy to Heroku*

## Project Strucure
All code should be within the `./src` directory.
```
./src/
├── app
│   └── index.markdown
├── build - Webpack configs for client/server and different environments
│   ├── client 
│   └── server
├── helper 
│       Helpers for connection to database, working with primitives
├── middleware 
│       Express middlewares - error handling, hot/dev reload, server side rendering
├── migrations 
│       Sequelize migrations
├── model 
│       Sequelize models
├── route 
│       Application routes (GET, POST, PUT, DELETE, ...)
├── schema 
│       MongoDB schemas
├── seed
│       Sample data for development
├── service 
│       All microservices
├── views
│        Containt all the html (.pug) templates
└── index.js
        Express server
```

## NPM Scripts
* `npm start` Runs the built server
* `npm build:[client|server]:[dev|prod]` Run webpack to build your application, you can build separately client and server code and specify the environment
* `npm run pretest` Runs JS linter
* `npm run test` Runs all tests *(Not Implemented Yet)*
* `npm run test:[client|server]` Runs specific tests *(Not Implemented Yet)*

### Development only:
* `npm run nodemon` Runs nodemon with the bundled server file
* `npm run server:watcher` Runs webpack file watcher for server files (client files are hot-reloaded via middlewares)
* `npm run dev` Runs a nodemon restarting server with a webpack file watcher

## Sequelize Migrations
[Sequelize CLI Migrations Documentation](http://docs.sequelizejs.com/en/latest/docs/migrations/)
* Create a new migration: `sequelize migration:create --name migration-name`
* Run pending migrations: `sequelize db:migrate`
* Downgrade: `sequelize db:migrate:undo`

## Sequelize Seeders
Create a new seed with `sequelize seed:create --name seed-name`
Run seeders: `sequelize db:seed:all`
Delete data: `sequelize db:seed:undo:all`

## Issues
When running `npm run dev` and changing frontend, you are not able to hard reload the page (F5) because server packing webpack ignores client folder (`./src/app`) in order for webpack-dev-middleware load it in memory and serve it via hot reload. Server restart would just discard all in memory changes.
To hard refresh, either run `npm run build:server:dev` to get the server up to date, or restart the process.
