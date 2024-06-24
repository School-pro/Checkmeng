// resultModel.js
const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  grade: ["A", "B", "C", "D", "E", "F", { default: "" }],
  position: ["1st", "2nd", { default: "" }],
  
  // Add additional fields such as attendance, test scores, etc.
});

const Result = mongoose.models.Result || mongoose.model("Result", resultSchema);

module.exports = Result;
