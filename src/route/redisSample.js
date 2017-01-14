import redis from '../helper/redis'

export default (app) => {
	app.get('/sample/redis/:key', (req, res) => {
		const getData = new Promise((resolve, reject) => {
			redis.get(req.params.key, (err, reply) => {
				if (err)
					reject(err);
				resolve(reply);
			});

			// If redis does not respond within 200ms timeout
			setTimeout(() => {
				reject('Operation exceeded 200ms - timeout.')
			}, 200);
		});

		getData
		.then((data) => {
			res.status(200).send('Data: ' + data);
		})
		.catch((err) => {
			console.error(err); // TODO
			res.status(500).send(err);
		});
	});
}
