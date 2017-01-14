import db from '../helper/postgre'

export default (app) => {
	app.get('/sample/postgre/:userId', (req, res) => {
		db.user.findAll({
			where: {
				id: req.params.userId
			}
		})
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
	});
}
