// armModel.js
const mongoose = require("mongoose");

const armSchema = new mongoose.Schema({
  // _id: Number,
  // name: { type: String, required: true },
  // classId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Class",
  //   required: true,
  // },
  // SchoolId: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "School",
  //   required: true,
  // },

  name: { type: String, required: true },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  // Add additional fields as needed
});

const Arm = mongoose.models.Arm || mongoose.model("Arm", armSchema);

module.exports = Arm;
