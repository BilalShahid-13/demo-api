const mongoose = require("mongoose");

const url = process.env.MONGODB_URL
const dbConnect = async () => {
  mongoose
    .connect("mongodb+srv://bcsmf21249:pvcvh38rXay3Wxl7@mernclustor.qf3zmjk.mongodb.net/MERNDB?retryWrites=true&w=majority&appName=MernClustor")
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((e) => {
      console.log("error to connect mongodb ->", e);
    });
};

module.exports = dbConnect;
