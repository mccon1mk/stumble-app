const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./mongoose.js")
db.mongoose.connect(db.url, db.options).then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});



app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});



const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});