// Import necessary modules
const express = require("express");
const router = express.Router();

const navigationController = require("../controllers/navigation/navigationController");

router.get("/", navigationController.home);
router.get("/dashboard", navigationController.dashboard);
router.get("/contact", navigationController.contact);
router.get("/adminpanel", navigationController.adminpanel);
// Export router
module.exports = router;
