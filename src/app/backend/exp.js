const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require('./routes')
const app = express();



var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));




// Require mongoose model/Schema/Connection
const db = require("./mongoose");
// Connect to db through mongoose
db.mongoose.connect(db.url, db.options).then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});



// Use the routes defined in routes.js
app.use("/", route);


const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});