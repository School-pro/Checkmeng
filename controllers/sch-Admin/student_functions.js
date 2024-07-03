// 1. Create an account for a school

require("dotenv").config();
// studentController.js
const Student = require("../../models/users/students/Student");
const Class = require("../../models/users/students/Class");
const Arm = require("../..//models/users/students/Arm");
const School = require("../../models/users/students/School");
const SchoolAdmin = require("../../models/users/SchoolAdmin");
const { validationResult } = require("express-validator"); // Example validation library
// const { authMiddleware } = require("../../middleware/authMiddleware");
const { v4: uuidv4 } = require("uuid"); // For generating unique IDs
const mongoose = require("mongoose");
// Controller to register a student

// Helper function to create or find an arm
async function createOrUpdateArm(classId, schoolId, classArm) {
  // Check for duplicate arms
  let arm = await Arm.findOne({ classId, schoolId, name: classArm });
  if (arm) {
    // If an arm with the same name already exists, return the existing arm
    return arm;
  } else {
    // Otherwise, create a new arm
    arm = new Arm({
      name: classArm,
      classId,
      schoolId,
    });
    await arm.save();
    return arm;
  }
}

exports.createStudent = async (req, res) => {
  try {
    // Validate request body using a validation library
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstname,
      othername,
      lastname,
      schoolId,
      classId,
      classArm,
      classArmId,
      profilePicture,
      dateOfBirth,
      address,
    } = req.body;

    // Validate school
    const school = await School.findById(schoolId);
    if (!school) {
      return res.status(400).json({ message: "Invalid school ID" });
    }

    // Validate class
    const classObj = await Class.findById(classId);
    if (!classObj || classObj.schoolId.toString() !== schoolId) {
      return res.status(400).json({
        message: "Invalid class ID or class does not belong to the school",
      });
    }

    // Create or find arms and store their IDs
    const classArmIds = [];
    for (const armName of classArm) {
      const arm = await createOrUpdateArm(classId, schoolId, classArm);
      classArmIds.push(arm._id);
    }

    // Generate the registration number
    const schoolShortName = school.name.substring(0, 5).toUpperCase();
    const registrationYear = new Date().getFullYear();

    const Reg_No = `${schoolShortName}${registrationYear}${Math.floor(
      1000 + Math.random() * 9000
    )})`;

    // const Reg_No = `${schoolShortName}${registrationYear}${classAndArm}`;

    // Generate a unique registration number (e.g., using a UUID library)
    // const Reg_No = uuidv4();

    // Create student
    const student = new Student({
      regNo: Reg_No,
      firstname,
      othername,
      lastname,
      schoolId,
      classId,
      classArm,
      classArmId: classArmIds, // Store arm IDs in an array,      profilePicture,
      dateOfBirth,
      address,
    });

    await student.save();

    if (!classObj.arms.includes(classArm._id)) {
      classObj.arms.push(classArm._id);
      await classObj.save(); // Update the Class document
    }

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//##############################################
//############### STILL ON THIS SPOT ###########
//##############################################

// // School Admin retreiving all students
exports.getAllStudentInASchool = async (req, res) => {
  try {
    const adminId = req.user; // Authenticated admin's ID from the authMiddleware

    console.log("Authenticated Admin ID:", adminId);

    // Validate adminId
    if (!mongoose.Types.ObjectId.isValid(adminId)) {
      return res.status(400).json({ message: "Invalid admin ID." });
    }

    // Find the admin and populate the school reference
    const admin = await SchoolAdmin.findById(adminId).populate("school");

    console.log("Admin Document:", admin);

    if (!admin) {
      return res.status(401).json({ message: "Admin not found." });
    }

    // Ensure school is populated
    if (!admin.school) {
      return res.status(400).json({ message: "School not found for admin." });
    }

    // Extract the school ID from the admin's document
    const schoolId = admin.school._id;

    console.log("School ID:", schoolId);

    // Find all students belonging to the admin's school
    const students = await Student.find({ schoolId });

    console.log("Students Found:", students);

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// // Find a student by their _id
// exports.findStudentById = async (req, res) => {
//   const { id } = req.params; // Assuming the id is passed as a URL parameter

//   try {
//     const student = await Student.findById(id);
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }
//     res.status(200).json(student);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
// // Update a student by their _id
// exports.updateStudentById = async (req, res) => {
//   const { id } = req.params; // Assuming the id is passed as a URL parameter
//   const updateData = req.body; // Assuming the update data is passed in the request body

//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(id, updateData, {
//       new: true,
//     });
//     if (!updatedStudent) {
//       return res.status(404).json({ message: "Student not found" });
//     }
//     res.status(200).json(updatedStudent);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Delete a student by their _id
// exports.deleteStudentById = async (req, res) => {
//   const { id } = req.params; // Assuming the id is passed as a URL parameter

//   try {
//     const deletedStudent = await Student.findByIdAndDelete(id);
//     if (!deletedStudent) {
//       return res.status(404).json({ message: "Student not found" });
//     }
//     res.status(200).json({ message: "Student deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
