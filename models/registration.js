const mongoose = require("mongoose");

const farmerOneSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  idnumber: String,
  ward: String,
  gender: String,
  dateOfReg: Date,
  dateOfBirth: Date,
  NIN: String,
  phone: Number,
  address: String,
  residence: String,
  stay: Number,
});

module.exports = mongoose.model("FarmerOne", farmerOneSchema);
