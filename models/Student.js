// studentModel.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  // Add additional fields as needed
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
