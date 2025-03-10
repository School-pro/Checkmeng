const router = require("express").Router();
const schoolAdminController = require("../../controllers/sch-Admin/schoolAdminAuth");
const schoolAdminStudentFunction = require("../../controllers/sch-Admin/student_functions");
const subjectController = require("../../controllers/sch-Admin/subjectController");
const resultController = require("../../controllers/sch-Admin/resultController");
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

// ROUTES FOR THE STUDENT RESULTS
router.get("/result", authMiddleware, resultController.computeAndSaveResults);

// ROUTES FOR STUDENTS SUBJECTS AND RESULTS
router.post(
  "/subject/:studentId",
  authMiddleware,
  subjectController.createSubjectsForStudent
);

router.put(
  "/subject/:studentId",
  authMiddleware,
  subjectController.updateSubjectsForStudent
);

router.get(
  "/subject/:studentId",
  authMiddleware,
  subjectController.getSubjectsForStudent
);

// DELETE request to delete all subjects for a student
// router.delete(
//   "/admin/subject/all/:studentId",
//   authMiddleware,
//   subjectController.deleteAllSubjectsForStudent
// );

// Delete a particular subject from a student
router.delete(
  "/subject/:studentId/:subjectId",
  authMiddleware,
  subjectController.deleteSubjectForStudent
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

// ROUTES FOR RESULTS

router.put("/result/:resultId", authMiddleware, resultController.updateResult);
router.delete(
  "/result/:resultId",
  authMiddleware,
  resultController.deleteResult
);
module.exports = router;
