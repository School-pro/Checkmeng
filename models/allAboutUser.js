// Superadmin model
const mongoose = require("mongoose");

const superadminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Add additional fields as needed
});

const Superadmin = mongoose.model("Superadmin", superadminSchema);

// SchoolAdmin model
const schoolAdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  // Add additional fields as needed
});

const SchoolAdmin = mongoose.model("SchoolAdmin", schoolAdminSchema);

// Student model
const studentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  // Add additional fields as needed
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Superadmin, SchoolAdmin, Student };
