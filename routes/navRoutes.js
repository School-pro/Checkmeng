// Import necessary modules
const express = require("express");
const router = express.Router();

const navigationController = require("../controllers/navigation/navigationController");

router.get("/", navigationController.home);
router.get("/dashboard", navigationController.dashboard);
router.get("/contact", navigationController.contact);
router.get("/adminpanel", navigationController.adminpanel);
router.get("/check-result", navigationController.resultCheck);
router.get("/about", navigationController.about);

// add middleware here
router.get("/register", navigationController.register);
router.get("/login", navigationController.login);
module.exports = router;
