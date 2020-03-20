const express = require("express");
const route = express.Router()
route.use(express.json());
const db = require("./mongoose");
const Events = db.mongoose.model('Events', db.events)




route.post("/", (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const Event = new Events({
    name: req.body.name,
    url: req.body.url,
    image: req.body.image,
    localDate: req.body.date,
    city: req.body.city,
  })

  Event.save().then((Event) => {
    res.status(200).send(Event);
  }).catch((error) => {
    console.log('ERROR:',error)
    es.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    })
  })
})


module.exports = route;