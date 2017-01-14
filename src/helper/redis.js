const debug = require("debug")('app:helper:redis');
const redis = require("redis");
const client = redis.createClient();

client.on("error", function (err) {
	debug(`Error: ${err}`);
});

export default client;
