// Import necessary models
const Superadmin = require("../../models/users/SuperAdmin");
const Student = require("../../models/users/students/Student");
const Class = require("../../models/users/students/Class");
const Arm = require("../../models/users/students/Arm");
const School = require("../../models/users/students/School");
const Result = require("../../models/results/Result");

// Create a new superadmin
exports.createSuperadmin = async (req, res) => {
  try {
    const superadmin = await Superadmin.create(req.body);
    res.status(201).json(superadmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all superadmins
exports.getAllSuperadmins = async (req, res) => {
  try {
    const superadmins = await Superadmin.find();
    res.status(200).json(superadmins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single superadmin by ID
exports.getSuperadminById = async (req, res) => {
  try {
    const superadmin = await Superadmin.findById(req.params.id);
    if (!superadmin) {
      return res.status(404).json({ message: "Superadmin not found" });
    }
    res.status(200).json(superadmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a superadmin by ID
exports.updateSuperadminById = async (req, res) => {
  try {
    const superadmin = await Superadmin.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!superadmin) {
      return res.status(404).json({ message: "Superadmin not found" });
    }
    res.status(200).json(superadmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a superadmin by ID
exports.deleteSuperadminById = async (req, res) => {
  try {
    const superadmin = await Superadmin.findByIdAndDelete(req.params.id);
    if (!superadmin) {
      return res.status(404).json({ message: "Superadmin not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Superadmin Controller
exports.createSuperadmin = async (req, res) => {
  try {
    const superadmin = await Superadmin.create(req.body);
    res.status(201).json(superadmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllSuperadmins = async (req, res) => {
  try {
    const superadmins = await Superadmin.find();
    res.status(200).json(superadmins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add other Superadmin controller methods as needed

// SchoolAdmin Controller
exports.createSchoolAdmin = async (req, res) => {
  try {
    const schoolAdmin = await SchoolAdmin.create(req.body);
    res.status(201).json(schoolAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllSchoolAdmins = async (req, res) => {
  try {
    const schoolAdmins = await SchoolAdmin.find();
    res.status(200).json(schoolAdmins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add other SchoolAdmin controller methods as needed

// Student Controller
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add other Student controller methods as needed

// SuperAdmin controller for creating of classes
exports.createClass = async (req, res) => {
  try {
    // Controller logic for creating class
    const createdClass = await Class.create(req.body);
    res
      .status(201)
      .json({ message: "Class created successfully", createdClass });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createArm = async (req, res) => {
  // Controller logic for creating arm
};

// ##############################################
// ############## FOR SCHOOL ####################
// ##############################################

exports.createSchool = async (req, res) => {
  // Controller logic for creating school
  try {
    const school = await School.create(req.body);
    res.status(201).json({ message: "School created successfully", school });
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
};

exports.getAllSchools = async (req, res) => {
  // Controller logic for getting all schools
  try {
    const school = School.find();
    res.status(201).json(school);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.inputStudentData = async (req, res) => {
  // Controller logic for inputting student data
};

exports.computeStudentResults = async (req, res) => {
  // Controller logic for computing student results
};

// Add other SchoolAdmin controller methods as needed
