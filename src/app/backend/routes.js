const express = require("express");
const route = express.Router()
route.use(express.json());
const db = require("./mongoose");
const Events = db.mongoose.model('Events', db.events)
// const deleteEvent = db.mongoose.model('deleteEvent', db.delete)


route.post("/", (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const Event = new Events({
    name: req.body.name,
    url: req.body.url,
    image: req.body.image,
    localDate: req.body.localDate,
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

route.get("/", (req, res) => {
  Events.find({}).then((data) => {
    res.send(data)
  }).catch((err) => {
    resp.status(500).send(err)
    // console.log(err)
  })
})



route.delete('/:id', async (req, res) => {
  let id = req.params.id
  try {
    const event = await Events.findByIdAndDelete(id)

    if (!event) {
       res.status(404).send("message: User does not exist")
    }

    console.log(event)
    res.status(200).send()

  } catch(err) {
    console.log(err)
   res.status(500).send(err)
  }
  

})



module.exports = route;