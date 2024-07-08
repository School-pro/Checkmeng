// resultController.js
const Result = require("../../models/results/Result");
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

    const { studentId } = req.body;

    // Check if the student exists
    const student = await Student.findById(studentId).populate({
      path: 'resultId',
      populate: {
        path: 'subjects',
        select: 'subject'
      }
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    // Check if the student has a result
    if (!student.resultId) {
      return res.status(404).json({ message: "No Result found for student." });
    }

    res.status(201).json(student.resultId);
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



// #############################################################
// ######## WORK HERE FOR THE UPDATE AND THE DELETE ############
// #############################################################

// Update a Result
exports.updateResult = async (req, res) => {
  try {
    const { resultId } = req.params;
    const updateData = req.body;

    const result = await Result.findByIdAndUpdate(resultId, updateData, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      return res.status(404).json({ message: "Result not found." });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

// Delete a Result
exports.deleteResult = async (req, res) => {
  try {
    const { resultId } = req.params;

    const result = await Result.findByIdAndDelete(resultId);

    if (!result) {
      return res.status(404).json({ message: "Result not found." });
    }

    res.status(200).json({ message: "Result deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};









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
