// Import necessary modules and controllers
const express = require("express");
const router = express.Router();
const superadminController = require("../controllers/users/superAdminController");

const studentController = require("../controllers/users/studentController");

// Routes for Superadmin
router.post("/superadmins", superadminController.createSuperadmin);
router.get("/superadmins", superadminController.getAllSuperadmins);
router.post("/schools", superadminController.createSchool);
router.get("/schools", superadminController.getAllSchools);
router.post("/class", superadminController.createClass);
router.post("/super/student", superadminController.createStudent);
// Add more routes for Superadmin as needed

// Routes for Student
router.post("/students", studentController.createStudent);
router.get("/students", studentController.getAllStudents);
// Add more routes for Student as needed

// Export router
module.exports = router;
