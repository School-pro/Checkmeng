const router = require("express").Router();
const schoolAdminController = require("../../controllers/sch-Admin/schoolAdminAuth");
const schoolAdminStudentFunction = require("../../controllers/sch-Admin/student_functions");
const schoolAdminSubjectResultFunction = require("../../controllers/sch-Admin/subject_result_functions");

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

// ROUTES FOR STUDENTS SUBJECTS AND RESULTS
router.post(
  "/subject/:studentId",
  authMiddleware,
  schoolAdminSubjectResultFunction.createSubjectsForStudent
);

router.put(
  "/subject/:studentId",
  authMiddleware,
  schoolAdminSubjectResultFunction.updateSubjectsForStudent
);
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

// FUNCTIONS FOR THE STUDENTS BY THE SCHOOL ADMIN
router.put(
  "/pup/:id",
  authMiddleware,
  schoolAdminStudentFunction.updateStudentById
);
router.delete(
  "/pup/:id",
  authMiddleware,
  schoolAdminStudentFunction.deleteStudentById
);
router.get(
  "/pup/:id",
  authMiddleware,
  schoolAdminStudentFunction.findStudentById
);

// ROUTES FOR SUBJECTS
module.exports = router;
