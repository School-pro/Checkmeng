// teacherModel.js
const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add additional fields as needed
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
