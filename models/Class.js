// classModel.js
const mongoose = require("mongoose");

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

module.exports = Class;
