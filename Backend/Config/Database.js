const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async (req, res) => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Connected to database"))
    .catch(() => {
      console.log("Failed to connect to database");
      process.exit(1);
    });
};


module.exports = dbConnect;
