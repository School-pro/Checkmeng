// examModel.js
const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  // Add additional fields as needed
});

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
