// settingController.js
const Setting = require("../models/setting");

// Create a new setting
exports.createSetting = async (req, res) => {
  try {
    const setting = await Setting.create(req.body);
    res.status(201).json(setting);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all settings
exports.getAllSettings = async (req, res) => {
  try {
    const settings = await Setting.find();
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other CRUD operations for Setting as needed
