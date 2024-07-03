// schoolAdminModel.js
const mongoose = require("mongoose");
// const AutoIncrement = require("mongoose-sequence")(mongoose);

const schoolAdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  school: { type: String, required: true },
  // school: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "School",
  //   required: true,
  // },
  role: ["Admin", "teacher", { default: "Admin" }],
  email: { type: String, required: true },
  password: { type: String, required: true },
  schoolAddress: { type: String, required: true },
});

// schoolAdminSchema.plugin(AutoIncrement, { inc_field: "customId" });

const SchoolAdmin =
  mongoose.models.SchoolAdmin ||
  mongoose.model("SchoolAdmin", schoolAdminSchema);

module.exports = SchoolAdmin;
