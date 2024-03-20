// Import necessary modules
const express = require("express");
const router = express.Router();

// Define routes for navigation
router.get("/home", (req, res) => {
  res.render("home"); // Assuming you're using a template engine like EJS
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/adminpanel", (req, res) => {
  res.render("adminpanel");
});

router.get("/contactus", (req, res) => {
  res.render("contactus");
});

// Export router
module.exports = router;
