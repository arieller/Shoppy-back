const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
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
    required: true,
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
    required: true,
    trim: true
  }
});

module.exports = Product;
