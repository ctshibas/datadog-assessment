const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const dotenv = require('dotenv')

// set path for db credentials
dotenv.config({ path: '../config/config.env '})

// variable to hold db connection
let _db;
const mongoConnect = callback => {
	// connect to MongoDB
	MongoClient.connect(process.env.MONGO_URL, { useUnifiedTopology: true })
		.then(client => {
			console.log('Connected');
			_db = client.db('island');
			callback();
		})
		.catch(err => {
			console.log(err)
			throw err;
		});
}

const getDb = () => {
	if (_db) {
		return _db;
	}
	throw 'No database found!';
}

module.exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;
