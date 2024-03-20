// Import necessary modules and controllers
const express = require("express");
const router = express.Router();
const superadminController = require("../controllers/superadminController");
const schoolAdminController = require("../controllers/schoolAdminController");
const studentController = require("../controllers/studentController");

// Routes for Superadmin
router.post("/superadmins", superadminController.createSuperadmin);
router.get("/superadmins", superadminController.getAllSuperadmins);
// Add more routes for Superadmin as needed

// Routes for SchoolAdmin
router.post("/schooladmins", schoolAdminController.createSchoolAdmin);
router.get("/schooladmins", schoolAdminController.getAllSchoolAdmins);
// Add more routes for SchoolAdmin as needed

router.post("/classes", schoolAdminController.createClass);
router.post("/arms", schoolAdminController.createArm);
router.post("/schools", schoolAdminController.createSchool);
router.post("/students", schoolAdminController.inputStudentData);
router.post("/compute-results", schoolAdminController.computeStudentResults);
// Add more routes for SchoolAdmin-specific functionalities

// Routes for Student
router.post("/students", studentController.createStudent);
router.get("/students", studentController.getAllStudents);
// Add more routes for Student as needed

// Export router
module.exports = router;
