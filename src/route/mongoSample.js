import mongoose from 'mongoose'
import Posts from '../schema/post'

export default (app) => {
	app.get('/sample/mongo/:postId', (req, res) => {
		let id;

		try {
			id = mongoose.Types.ObjectId(`${req.params.postId}`);
		}
		catch(err) {
			return res.status(500).send(err);
		}

		Posts.find({
			_id: id
		})
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
	});
}
