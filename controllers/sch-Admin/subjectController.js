require("dotenv").config();
// studentController.js
const Student = require("../../models/users/students/Student");
const SchoolAdmin = require("../../models/users/SchoolAdmin");
const Subject = require("../../models/results/Subject");
const Result = require("../../models/results/Result");
const { validationResult } = require("express-validator"); // Example validation library
const { v4: uuidv4 } = require("uuid"); // For generating unique IDs
const mongoose = require("mongoose");

// Create Subjects for a Student
exports.createSubjectsForStudent = async (req, res) => {
  try {
    // Validate request body using a validation library
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { studentId } = req.params; // Student ID from the request parameters
    const { subjects } = req.body; // Array of subjects from the request body

    const adminId = req.user; // Authenticated admin's ID from the authMiddleware

    // Validate adminId
    if (!mongoose.Types.ObjectId.isValid(adminId)) {
      return res.status(400).json({ message: "Invalid admin ID." });
    }

    // Find the admin and populate the school reference
    const admin = await SchoolAdmin.findById(adminId).populate("school");

    if (!admin) {
      return res.status(401).json({ message: "Admin not found." });
    }

    if (!admin.school) {
      return res.status(400).json({ message: "School not found for admin." });
    }

    // Ensure the student belongs to the same school as the admin
    const student = await Student.findOne({
      _id: studentId,
      schoolId: admin.school._id,
    });

    if (!student) {
      return res.status(404).json({
        message: "Student not found or does not belong to this school.",
      });
    }

    // Create or update the student's subjects
    const subjectObjects = subjects.map((sub) => {
      if (sub.subject === "Native Language") {
        return { subject: sub.subject, nativeLanguage: sub.nativeLanguage };
      } else {
        return { subject: sub.subject };
      }
    });

    const subjectIds = await Promise.all(
      subjectObjects.map(async (subject) => {
        const newSubject = new Subject(subject);
        const savedSubject = await newSubject.save();
        return savedSubject._id;
      })
    );

    student.subjects = subjectIds;

    // Create or update the student result subjects
    let result = await Result.findOne({ studentId: student._id });
    if (!result) {
      result = new Result({
        studentId: student._id,
        subjects: subjectIds,
      });
    } else {
      result.subjects = subjectIds;
    }
    await result.save();

    student.resultId = result._id;
    await student.save();

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update Subjects for a Student
exports.updateSubjectsForStudent = async (req, res) => {
  try {
    const { studentId } = req.params; // Student ID from the request parameters
    const { subjects } = req.body; // Array of subjects from the request body

    const adminId = req.user; // Authenticated admin's ID from the authMiddleware

    // Validate adminId
    if (!mongoose.Types.ObjectId.isValid(adminId)) {
      return res.status(400).json({ message: "Invalid admin ID." });
    }

    // Find the admin and populate the school reference
    const admin = await SchoolAdmin.findById(adminId).populate("school");

    if (!admin) {
      return res.status(401).json({ message: "Admin not found." });
    }

    if (!admin.school) {
      return res.status(400).json({ message: "School not found for admin." });
    }

    // Ensure the student belongs to the same school as the admin
    const student = await Student.findOne({
      _id: studentId,
      schoolId: admin.school._id,
    });

    if (!student) {
      return res.status(404).json({
        message: "Student not found or does not belong to this school.",
      });
    }

    // Create or update the student's subjects
    const subjectObjects = subjects.map((sub) => {
      if (sub.subject === "Native Language") {
        return { subject: sub.subject, nativeLanguage: sub.nativeLanguage };
      } else {
        return { subject: sub.subject };
      }
    });

    const subjectIds = await Promise.all(
      subjectObjects.map(async (subject) => {
        const newSubject = new Subject(subject);
        const savedSubject = await newSubject.save();
        return savedSubject._id;
      })
    );

    student.subjects = subjectIds;
    await student.save();

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Subject for a Student
exports.deleteSubjectForStudent = async (req, res) => {
  try {
    const { studentId, subjectId } = req.params; // Student and Subject IDs from the request parameters
    console.log(`Student ID: ${studentId}, Subject ID: ${subjectId}`);

    const adminId = req.user; // Authenticated admin's ID from the authMiddleware
    console.log(`Admin ID: ${adminId}`);

    // Validate adminId
    if (!mongoose.Types.ObjectId.isValid(adminId)) {
      return res.status(400).json({ message: "Invalid admin ID." });
    }

    // Find the admin and populate the school reference
    const admin = await SchoolAdmin.findById(adminId).populate("school");
    console.log(`Admin: ${admin}`);

    if (!admin) {
      return res.status(401).json({ message: "Admin not found." });
    }

    if (!admin.school) {
      return res.status(400).json({ message: "School not found for admin." });
    }

    // Ensure the student belongs to the same school as the admin
    const student = await Student.findOne({
      _id: studentId,
      schoolId: admin.school._id,
    });
    console.log(`Student: ${student}`);

    if (!student) {
      return res.status(404).json({
        message: "Student not found or does not belong to this school.",
      });
    }

    // Check if the subject exists in the student's subjects
    if (!student.subjects.includes(subjectId)) {
      return res
        .status(404)
        .json({ message: "Subject not found for this student." });
    }

    // Remove the subject from the student's subjects
    student.subjects.pull(subjectId);
    await student.save();

    res.status(200).json({ message: "Subject removed successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Subjects for a Student
exports.getSubjectsForStudent = async (req, res) => {
  try {
    const { studentId } = req.params; // Student ID from the request parameters

    const adminId = req.user; // Authenticated admin's ID from the authMiddleware

    // Validate adminId
    if (!mongoose.Types.ObjectId.isValid(adminId)) {
      return res.status(400).json({ message: "Invalid admin ID." });
    }

    // Find the admin and populate the school reference
    const admin = await SchoolAdmin.findById(adminId).populate("school");

    if (!admin) {
      return res.status(401).json({ message: "Admin not found." });
    }

    if (!admin.school) {
      return res.status(400).json({ message: "School not found for admin." });
    }

    // Ensure the student belongs to the same school as the admin
    const student = await Student.findOne({
      _id: studentId,
      schoolId: admin.school._id,
    }).populate("subjects");

    if (!student) {
      return res.status(404).json({
        message: "Student not found or does not belong to this school.",
      });
    }

    res.status(200).json(student.subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete all Subjects for a Student
exports.deleteAllSubjectsForStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Find the student by ID
    const student = await Student.findById(studentId);

    // Check if student exists
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    // Remove all subjects from the student's subjects array
    await Student.updateOne({ _id: studentId }, { $set: { subjects: [] } });

    res.status(200).json({ message: "All subjects deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};
