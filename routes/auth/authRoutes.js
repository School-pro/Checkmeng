// Import necessary modules
const express = require("express");
const router = express.Router();

const schoolAdminAuth = require("../../controllers/sch-Admin/schoolAdminAuth");

// Authentication route for the school admin
router.post("/admin-register", schoolAdminAuth.registerSchoolAdmin);
router.post("/admin-login", schoolAdminAuth.loginSchoolAdmin);
router.post("/admin-logout", schoolAdminAuth.logoutSchoolAdmin);

module.exports = router;
