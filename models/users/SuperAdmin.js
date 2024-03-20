// superadminModel.js
const mongoose = require("mongoose");

const superadminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Add additional fields as needed
});

const Superadmin = mongoose.model("Superadmin", superadminSchema);

module.exports = Superadmin;
