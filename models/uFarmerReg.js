const mongoose = require("mongoose");

const uFarmerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  idnumber: String,
  ward: String,
  gender: String,
  dateOfReg: Date,
  dateOfBirth: Date,
  NIN: String,
  phone: Number,
});

module.exports = mongoose.model("UrbanFarmer", uFarmerSchema);
