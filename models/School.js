// School model
const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  email: { type: String, required: true },
  // Add additional fields as needed
});

const School = mongoose.models.School || mongoose.model("School", schoolSchema);

module.exports = School;
