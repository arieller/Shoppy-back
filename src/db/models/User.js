const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});

userSchema.pre("save", async function(next) {
  const user = this;

  console.log("just before saving");

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
