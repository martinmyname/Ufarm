const mongoose = require("mongoose");

const upload = new mongoose.Schema({
  product_id: String,
  product_name: String,
  product_quantity: Number,
  produce_type: String,
  price: Number,
  directions: String,
  ward: String,
  Mode_of_payment: String,
  Mode_of_delivery: String,
  phone: Number,
  image: { contentType: String, path: String, image: Buffer },
});

module.exports = mongoose.model("product", upload);
