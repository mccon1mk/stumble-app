const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// const CURL = 'mongodb://localhost:27017,localhost:27018,localhost:27019/StumbleDB?replicaSet=replset';

// Cloud connection/ Account to be removed 
const CURL = 'mongodb+srv://stumble:stumble1@stumble-kitt1.mongodb.net/test?retryWrites=true'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

const EventModel = {
  name: String,
  url: String,
  image: String,
  localDate: String,
  city: String, 
}


const db = {};
db.mongoose = mongoose;
db.url = CURL;
db.options = options;
db.events = EventModel;


module.exports = db
