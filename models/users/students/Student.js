// studentModel.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  // _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  regNo: { type: String, unique: true, auto: true },
  firstname: { type: String, required: true },
  othername: { type: String },
  lastname: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    // required: true,
  },
  classArm: { type: String, required: true },
  classArmId: { type: mongoose.Schema.Types.ObjectId, ref: "Arm" }, // Array of ObjectIds,
  profilePicture: [
    { type: String },
    { value: "http://pictures.com/images/" },
    { default: "" },
  ],
  resultId: { type: mongoose.Schema.Types.ObjectId, ref: "Result" },
  dateOfBirth: { type: Date, default: Date.now() },
  address: { type: String, required: true, default: "" },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  // Add additional fields as needed
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

module.exports = Student;
