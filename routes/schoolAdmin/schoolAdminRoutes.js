const router = require("express").Router();
const schoolAdminController = require("../../controllers/sch-Admin/schoolAdminAuth");
const schoolAdminStudentFunction = require("../../controllers/sch-Admin/student_functions");

// importing the auth middleware
const authMiddleware = require("../../middleware/authMiddleware");
// (AUTH) Routes for SchoolAdmin
router.post("/register", schoolAdminController.registerSchoolAdmin);
router.post("/login", schoolAdminController.loginSchoolAdmin);
router.post("/logout", schoolAdminController.logoutSchoolAdmin);
// Add more routes for SchoolAdmin as needed

// Other functionalities by the School Administrator
router.post("/reg-pupil", schoolAdminStudentFunction.createStudent);
router.get(
  "/all",
  authMiddleware,
  schoolAdminStudentFunction.getAllStudentInASchool
);
// router.put("/:id", schoolAdminStudentFunction.updateStudentById);
// router.delete("/:id", schoolAdminStudentFunction.deleteStudentById);
// router.get("/:id", schoolAdminStudentFunction.findStudentById);

//Other
// router.post("/students", schoolAdminController.inputStudentData);
// router.post("/compute-results", schoolAdminController.computeStudentResults);
// // Add more routes for SchoolAdmin-specific functionalities

// PARAMATIZED ROUTES

// (CRUD) Routes for SchoolAdmin
router.put("/update/:id", schoolAdminController.updateSchoolAdminById);
router.delete("/delete/:id", schoolAdminController.deleteSchoolAdminById);
router.get("/:id", schoolAdminController.getSchoolAdminById);
router.get("/", schoolAdminController.getAllSchoolAdmins);

module.exports = router;
