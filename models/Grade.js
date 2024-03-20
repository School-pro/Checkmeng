// gradeModel.js
const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  minScore: { type: Number, required: true },
  maxScore: { type: Number, required: true },
  // Add additional fields as needed
});

const Grade = mongoose.model("Grade", gradeSchema);

module.exports = Grade;
