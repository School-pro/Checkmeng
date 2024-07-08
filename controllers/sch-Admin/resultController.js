// resultController.js
const Result = require("../../models/resultModel");
const Exam = require("../../models/examModel");
const Student = require("../../models/users/students/Student");
const { validationResult } = require("express-validator"); // Example validation library

// Compute and Save Results for a Student
exports.computeAndSaveResults = async (req, res) => {
  try {
    // Validate request body or use a validation library like express-validator

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { studentId, examId, results } = req.body;

    // Check if the student exists
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    // Check if the exam exists
    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found." });
    }

    // Validate and process results
    const validatedResults = results.map((result) => ({
      ...result,
      studentId,
      examId,
    }));

    // Save results to the database
    const savedResults = await Result.insertMany(validatedResults);

    res.status(201).json(savedResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

// Grade Student based on Results
exports.gradeStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Fetch all results for the student
    const results = await Result.find({ studentId });

    // Example grading logic
    const gradedResults = results.map((result) => ({
      ...result.toObject(),
      grade: calculateGrade(result), // Implement your grade calculation logic here
    }));

    res.status(200).json(gradedResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

// Example function to calculate grade based on result
function calculateGrade(result) {
  // Implement your grading logic based on result data
  // Example: grading based on score, thresholds, etc.
  return "A"; // Replace with actual logic
}

// Create a new Exam
exports.createExam = async (req, res) => {
  try {
    const { name, subjects, date } = req.body;

    const newExam = new Exam({
      name,
      subjects,
      date,
    });

    const savedExam = await newExam.save();

    res.status(201).json(savedExam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

// Update an Exam by ID
exports.updateExamById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedExam = await Exam.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedExam) {
      return res.status(404).json({ message: "Exam not found." });
    }

    res.status(200).json(updatedExam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

// Delete an Exam by ID
exports.deleteExamById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExam = await Exam.findByIdAndDelete(id);

    if (!deletedExam) {
      return res.status(404).json({ message: "Exam not found." });
    }

    res.status(200).json({ message: "Exam deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};
