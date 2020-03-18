const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const CURL = 'mongodb://localhost:27017,localhost:27018,localhost:27019/task-manager-api?replicaSet=replset';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

const db = {};
db.mongoose = mongoose;
db.url = CURL;
db.options = options;
// db.tutorials = require("./events.model.js")(mongoose);

module.exports = db;