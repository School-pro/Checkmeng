// classModel.js
const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },

  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  arms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Arm" }],
  // arms: [],
});

// classSchema.plugin(AutoIncrement, { inc_field: "customId" });
const Class = mongoose.models.Class || mongoose.model("Class", classSchema);

module.exports = Class;
