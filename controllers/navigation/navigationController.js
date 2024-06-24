const express = require("express");
const router = express.Router();

// landing page
exports.home = (req, res) => {
  const user = req.user;

  res.render("index", { user });
};

// student dashboard page
exports.dashboard = (req, res) => {
  const user = req.user;

  res.render("dashboard", { user });
};

// school admin page
exports.adminpanel = (req, res) => {
  const user = req.user;

  res.render("adminPanel", { user });
};

// contact us page
exports.contact = (req, res) => {
  const user = req.user;

  res.render("contact", { user });
};

// register form
exports.register = (req, res) => {
  const user = req.user;

  res.render("register", { user });
};

// login page/ form
exports.login = (req, res) => {
  const user = req.user;

  res.render("login", { user });
};

// result checker page
exports.resultCheck = (req, res) => {
  const user = req.user;

  res.render("check", { user });
};

// result checker page
exports.about = (req, res) => {
  const user = req.user;

  res.render("about", { user });
};
