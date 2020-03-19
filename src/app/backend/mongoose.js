const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const CURL = 'mongodb://localhost:27017,localhost:27018,localhost:27019/task-manager-api?replicaSet=replset';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

const EventModel = {
  name: String,
  image: String,
  localDate: Date,
  city: String,
  url: String
}


const db = {};
db.mongoose = mongoose;
db.url = CURL;
db.options = options;
db.events = EventModel;


module.exports = db
