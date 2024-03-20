// School model
const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add additional fields as needed
});

const School = mongoose.model("School", schoolSchema);

// Class model
const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  // Add additional fields as needed
});

const Class = mongoose.model("Class", classSchema);

// Arm model
const armSchema = new mongoose.Schema({
  name: { type: String, required: true },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  // Add additional fields as needed
});

const Arm = mongoose.model("Arm", armSchema);

// Result model
const resultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  // Add additional fields such as attendance, test scores, etc.
});

const Result = mongoose.model("Result", resultSchema);

// Other models can be defined similarly

module.exports = { School, Class, Arm, Result };
