const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const loginSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    required: "Please Enter a role",
  },
});

loginSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Login", loginSchema);
