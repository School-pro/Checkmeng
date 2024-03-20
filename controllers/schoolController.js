// schoolController.js
const School = require("../models/school");

// Create a new school
exports.createSchool = async (req, res) => {
  try {
    const school = await School.create(req.body);
    res.status(201).json(school);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all schools
exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other CRUD operations for School as needed
