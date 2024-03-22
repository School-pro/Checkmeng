// schoolAdminModel.js
const mongoose = require("mongoose");

const schoolAdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  school: { type: String, required: true },
  // Add additional fields as needed
});

const SchoolAdmin = mongoose.model("SchoolAdmin", schoolAdminSchema);

module.exports = SchoolAdmin;
