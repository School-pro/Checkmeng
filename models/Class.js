// classModel.js
const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.Number,
    ref: "School",
    required: true,
  },
  // Add additional fields as needed
  //   optional section for the Arm of the classes
});

const Class = mongoose.models.Class || mongoose.model("Class", classSchema);

module.exports = Class;
