// Import necessary modules
const express = require("express");
const router = express.Router();

// Import controllers
const superadminController = require("../controllers/users/superAdminController");
const schoolAdminController = require("../controllers/users/schoolAdminController");
const studentController = require("../controllers/users/studentController");
const classController = require("../controllers/classController");
const armController = require("../controllers/armController");
const schoolController = require("../controllers/schoolController");
const resultController = require("../controllers/resultController");
const teacherController = require("../controllers/teacherController");
const settingController = require("../controllers/settingController");

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

// Routes for other controllers
router.post("/teachers", teacherController.createTeacher);
router.post("/settings", settingController.createSetting);
router.post("/schools", schoolController.createSchool);
router.post("/results", resultController.createResult);

// Export router
module.exports = router;
