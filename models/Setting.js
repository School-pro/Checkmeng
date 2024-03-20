// settingModel.js
const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
  // Add additional fields as needed
});

const Setting = mongoose.model("Setting", settingSchema);

module.exports = Setting;
