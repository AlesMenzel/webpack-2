import fs from "fs"
import path from "path"
import Sequelize from 'sequelize'

const sequelize = new Sequelize(process.env.DB_POSTGRE);
const db = {};

fs
.readdirSync('./src/model')
.forEach(function (file) {
	const modelPath = path.resolve(__dirname, `../model/${file}`);
	let model = require(`../model/${file}`);

	model = sequelize.import(modelPath, model);

	db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
	if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
