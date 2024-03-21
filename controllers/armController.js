// armController.js
const Arm = require("../models/Arm");

// Create a new arm
exports.createArm = async (req, res) => {
  try {
    const arm = await Arm.create(req.body);
    res.status(201).json(arm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all arms
exports.getAllArms = async (req, res) => {
  try {
    const arms = await Arm.find();
    res.status(200).json(arms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other controller methods for Arm as needed
