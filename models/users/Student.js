// studentModel.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  // Add additional fields as needed
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
