import mongoose from 'mongoose';
import mongo from '../helper/mongo';

const Schema = mongoose.Schema;

// Create schema
const postsSchema = new Schema({
	text: String
});

// Create model
const model = mongo.model('posts', postsSchema);

export default model;
