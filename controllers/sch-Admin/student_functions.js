// 1. Create an account for a school

// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
// const Student = require("../../models/users/students/Student");

// const School = require("../../models/users/students/School");
// const Class = require("../../models/users/students/Class");
// const Arm = require("../../models/users/students/Arm");
// exports.createStudent = async (req, res) => {
//   const {
//     studentId,
//     firstname,
//     othername,
//     lastname,
//     schoolId,
//     classId,
//     classArmId,
//     grade,
//     position,
//     profilePicture,
//     dateOfBirth,
//     address,
//   } = req.body;

//   try {
//     // find the school by ID
//     const school = await School.findById(schoolId);
//     if (!school) {
//       return res.status(404).json({ message: "School not found" });
//     }
//     // Validate request body
//     if (!firstname || !lastname || !address || !dateOfBirth) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Check if student name already exists
//     const existingStudent =
//       (await Student.findOne({ firstname })) && Student.findOne({ lastname });

//     if (existingStudent) {
//       return res.status(400).json({ message: "Pupil already exists" });
//     }

//     // let the relational tables have their own definitions

//     // 1. school = relates to school table
//     // 2. classId = refers to class table
//     // 3. classArmId = refers to classArm table

//     // Validate references
//     // const school = await School.findById(schoolId);
//     // if (!school) return res.status(400).send({ message: "Invalid schoolId" });

//     const classObj = await Class.findById(classId);
//     if (!classObj) return res.status(400).send({ message: "Invalid classId" });

//     const arm = await Arm.findById(classArmId);
//     if (!arm) return res.status(400).send({ message: "Invalid classArmId" });

//     // Create new student
//     const newStudent = new Student({
//       studentId: Reg_No,
//       firstname,
//       othername,
//       lastname,
//       schoolId,
//       classId,
//       classArmId,
//       grade,
//       position,
//       profilePicture,
//       dateOfBirth,
//       address,
//     });

//     // Save student to database
//     await newStudent.save();

//     // res.status(201).send(student);
//     res.status(201).json({ message: "Stidemt", student: newStudent });
//   } catch (error) {
//     res.status(500).send({ message: "Error creating student", error });
//   }
// };

// studentController.js
const Student = require("../models/studentModel");
const Class = require("../models/classModel");
const Arm = require("../models/armModel");
const School = require("../models/schoolModel");

// Controller to register a student
exports.registerStudent = async (req, res) => {
  try {
    const {
      firstname,
      othername,
      lastname,
      schoolId,
      classId,
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

    // Validate arm
    const arm = await Arm.findById(classArmId);
    if (
      !arm ||
      arm.classId.toString() !== classId ||
      arm.schoolId.toString() !== schoolId
    ) {
      return res.status(400).json({
        message: "Invalid arm ID or arm does not belong to the class/school",
      });
    }

    // Generate the registration number
    const schoolShortName = school.name.substring(0, 5).toUpperCase();
    const registrationYear = new Date().getFullYear();
    const Reg_No = `${schoolShortName}${registrationYear}${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    // Create student
    const student = new Student({
      regNo: Reg_No,
      firstname,
      othername,
      lastname,
      schoolId,
      classId,
      classArmId,
      profilePicture,
      dateOfBirth,
      address,
    });

    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// // // School Admin retreiving all students
// exports.getAllStudents = async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.status(200).json(students);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

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
