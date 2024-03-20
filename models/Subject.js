// subjectModel.js
const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add additional fields as needed
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
