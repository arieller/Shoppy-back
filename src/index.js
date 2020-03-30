const express = require("express");
require("./db/mongoose");
const User = require("./db/models/User");
const Product = require("./db/models/Product");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("server is on on port " + port);
});

app.post("/signup", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send("Signed up! " + user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.post("/signin", (req, res) => {});

app.post("/writeProducts", (req, res) => {});

app.get("/", (req, res) => {
  res.status(200).send("hola senior");
});
