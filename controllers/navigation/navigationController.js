// Import necessary modules
const express = require("express");
const router = express.Router();

exports.home = (req, res) => {
  // Define routes for navigation
  // router.get("/home", (req, res) => {
  res.render("index"); // Assuming you're using a template engine like EJS
};

exports.dashboard = (req, res) => {
  // router.get("/dashboard", (req, res) => {
  res.render("dashboard");
};
exports.adminpanel = (req, res) => {
  // router.get("/adminpanel", (req, res) => {
  res.render("adminpanel");
};
exports.contact = (req, res) => {
  // router.get("/contactus", (req, res) => {
  res.render("contactus");
};

// Export router
// module.exports = router;
