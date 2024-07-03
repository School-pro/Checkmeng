// subjectModel.js
const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  names: [],
  // Add additional fields as needed
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
