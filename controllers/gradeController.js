// gradeController.js
const Grade = require("../models/grade");

// Create a new grade
exports.createGrade = async (req, res) => {
  try {
    const grade = await Grade.create(req.body);
    res.status(201).json(grade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all grades
exports.getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.find();
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other controller methods for Grade as needed
