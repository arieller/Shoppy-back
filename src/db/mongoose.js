const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://admin:admin@cluster0-h4kue.mongodb.net/shoppy?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});

mongoose.connection.on("error", err => {
  console.error("Error connecting to mongo ", err);
});
