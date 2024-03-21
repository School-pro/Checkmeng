// studentModel.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  studentId: { type: Number, unique: true, auto: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.Number,
    ref: "School",
    required: true,
  },
  classId: {
    type: mongoose.Schema.Types.Number,
    ref: "Class",
    required: true,
  },
  // Add additional fields as needed
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

module.exports = Student;
