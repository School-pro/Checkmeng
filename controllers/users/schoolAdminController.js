// Import necessary models
const SchoolAdmin = require("../../models/users/SchoolAdmin");
const Class = require("../../models/Class");
const Arm = require("../../models/Arm");
const School = require("../../models/School");
const Student = require("../../models/users/Student");
const Result = require("../../models/Result");

// Create a new school admin
exports.createSchool = async (req, res) => {
  try {
    const school = await School.create(req.body);
    res.status(201).json(school);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all school admins
exports.getAllSchoolAdmins = async (req, res) => {
  try {
    const schoolAdmins = await SchoolAdmin.find();
    res.status(200).json(schoolAdmins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crete school admin
exports.createSchoolAdmin = async (req, res) => {
  try {
    const schoolAdmins = await SchoolAdmin.create(req.body);
    res.status(200).json(schoolAdmins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single school admin by ID
exports.getSchoolAdminById = async (req, res) => {
  try {
    const schoolAdmin = await SchoolAdmin.findById(req.params.id);
    if (!schoolAdmin) {
      return res.status(404).json({ message: "School admin not found" });
    }
    res.status(200).json(schoolAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a school admin by ID
exports.updateSchoolAdminById = async (req, res) => {
  try {
    const schoolAdmin = await SchoolAdmin.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!schoolAdmin) {
      return res.status(404).json({ message: "School admin not found" });
    }
    res.status(200).json(schoolAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a school admin by ID
exports.deleteSchoolAdminById = async (req, res) => {
  try {
    const schoolAdmin = await SchoolAdmin.findByIdAndDelete(req.params.id);
    if (!schoolAdmin) {
      return res.status(404).json({ message: "School admin not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new class
exports.createClass = async (req, res) => {
  try {
    const studentClass = await Class.create(req.body);
    res.status(201).json(studentClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new arm
exports.createArm = async (req, res) => {
  try {
    const arm = await Arm.create(req.body);
    res.status(201).json(arm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Input student data
exports.inputStudentData = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Compute student results
exports.computeStudentResults = async (req, res) => {
  try {
    // Implementation logic for computing student results
    // Example: Calculate scores, determine grades, and save results to the database
    // You may need to retrieve student data, perform calculations, and then save results
    // You can use the Result model to store computed results
    res.status(200).json({ message: "Student results computed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
