const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    trim: true
  },
  pictures: {
    pic1: {
      type: String,
      required: true,
      trim: true
    },
    pic2: {
      type: String,
      trim: true
    },
    pic3: {
      type: String,
      trim: true
    }
  },
  itemType: {
    type: String,
    required: true,
    trim: true
  },
  featured: {
    type: Boolean,
    trim: true
  },
  partOfCollection: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    trim: true
  },
  onSale: {
    type: Boolean,
    trim: true
  }
});

module.exports = Product;
