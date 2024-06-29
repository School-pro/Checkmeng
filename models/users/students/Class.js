// classModel.js
const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  arms: [],
  // arms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Arm" }],
  // Add additional fields as needed
  //   optional section for the Arm of the classes
});

// classSchema.plugin(AutoIncrement, { inc_field: "customId" });
const Class = mongoose.models.Class || mongoose.model("Class", classSchema);

module.exports = Class;
