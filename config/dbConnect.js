const mongoose = require("mongoose");

const url = process.env.MONGODB_URL
const dbConnect = async () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((e) => {
      console.log("error to connect mongodb ->", e);
    });
};

module.exports = dbConnect;
