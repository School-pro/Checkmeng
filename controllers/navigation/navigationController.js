const express = require("express");
const router = express.Router();

// landing page
exports.home = (req, res) => {
  res.render("index");
};

// student dashboard page
exports.dashboard = (req, res) => {
  res.render("dashboard");
};

// school admin page
exports.adminpanel = (req, res) => {
  res.render("adminPanel");
};

// contact us page
exports.contact = (req, res) => {
  res.render("contact");
};

// register form
exports.register = (req, res) => {
  res.render("register");
};

// login page/ form
exports.login = (req, res) => {
  res.render("login");
};

// result checker page
exports.resultCheck = (req, res) => {
  res.render("check");
};

// result checker page
exports.about = (req, res) => {
  res.render("about");
};
