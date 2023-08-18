const {connect, connection} = require('mongoose');

const connectionString = process.env.MONGODBURI || 'mongodb://127.0.0.1:27017/socialNetDB';

connect(connectionString);

module.exports = connection;