// positionModel.js
const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
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
  position: { type: Number, required: true },
  // Add additional fields as needed
});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
