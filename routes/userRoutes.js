// Import necessary modules and controllers
const express = require("express");
const router = express.Router();
const superadminController = require("../controllers/users/superAdminController");
const schoolAdminController = require("../controllers/users/schoolAdminController");
const studentController = require("../controllers/users/studentController");

// Routes for Superadmin
router.post("/superadmins", superadminController.createSuperadmin);
router.get("/superadmins", superadminController.getAllSuperadmins);
router.post("/schools", superadminController.createSchool);
router.get("/schools", superadminController.getAllSchools);
router.post("/class", superadminController.createClass);
router.post("/super/student", superadminController.createStudent);
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
