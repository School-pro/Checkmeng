// School model
const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add additional fields as needed
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;
