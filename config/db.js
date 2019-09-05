//used to connect to mongodb
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

//will use async await
const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    proccess.exit(1);
  }
};

module.exports = connectDB;
