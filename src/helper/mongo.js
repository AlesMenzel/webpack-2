import mongoose from 'mongoose';

mongoose.connect(process.env.DB_MONGO);

// Use native promises
mongoose.Promise = global.Promise;

export default mongoose;
