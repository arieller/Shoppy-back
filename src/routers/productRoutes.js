const express = require("express");
const router = new express.Router();
const Product = require("../db/models/Product");

router.get("/getItems", async (req, res) => {
  const item = await Product.find();

  res.status(200).send(item);
});

module.exports = router;

// router.post("/writeProducts", (req, res) => {
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
