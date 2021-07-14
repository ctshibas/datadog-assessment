// const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const { DBObj } = require('../config/config.js')

// starting - undefined
let _db;

// mongoose.connect(DBObj.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// _db = mongoose.connection;

// _db.once('open', function () {
	
// });

const mongoConnect = callback => {
	//  connect to MongoDB
	MongoClient.connect(DBObj.MONGO_URL,
	 { useNewUrlParser: true, useUnifiedTopology: true })
		.then(client => {
			console.log('Connected');
			_db = client.db('island');
			callback();
		})
		.catch(err => {
			console.log(err)
			throw err;
		});
};

const getDb = () => {
	if (_db) {
		// console.log(_db)
		return _db;
	}
	throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

