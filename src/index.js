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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "must provide email and password" });
  }

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

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "must provide email and password" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).send({ error: "invalid password or email" });
  }
});

// app.post("/writeProducts", (req, res) => {
//   const products = req.body;
//   try {
//     new Promise((resolve, reject) => {
//       for (const product in products) {
//         const newProduct = new Product(products[product]);

//         newProduct.save();
//       }

//       resolve();
//     })
//       .then(() => {
//         res.status(201).send("Product/s saved.");
//       })
//       .catch(err => {
//         console.log("ERROR while saving new products " + err);
//         res.status(500);
//       });
//   } catch (err) {
//     console.log("ERRORR on outer catch while saving products " + err);
//     res.status(500);
//   }
// });
