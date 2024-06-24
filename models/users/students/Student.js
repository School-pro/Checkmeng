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
    // "_id": "6676e1df3c605bae218cae71",required: true,
  },
  classId: {
    type: mongoose.Schema.Types.Number,
    ref: "Class",
    // required: true,
  },
  classArmId: {
    type: mongoose.Schema.Types.Number,
    ref: "Arm",
    // required: true,
  },
  profilePicture: [
    { type: String },
    { value: "http://pictures.com/images/" },
    { default: "" },
  ],
  dateOfBirth: { type: Date, default: Date.now() },
  address: { type: String, required: true, default: "" },

  // Add additional fields as needed
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

module.exports = Student;
