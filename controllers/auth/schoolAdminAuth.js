// schoolAdminController.js

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SchoolAdmin = require("../../models/users/SchoolAdmin");

exports.registerSchoolAdmin = async (req, res) => {
  try {
    const { username, email, password, school } = req.body;

    // Validate request body
    if (!username || !email || !password || !school) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if school admin already exists
    const existingAdmin = await SchoolAdmin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "School admin already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new school admin
    const newAdmin = await SchoolAdmin.create({
      username,
      email,
      password: hashedPassword,
      school,
    });

    res.status(201).render("dashboard", { newAdmin }).console.log({
      message: "School admin registered successfully",
      newAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginSchoolAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find school admin by email
    const admin = await SchoolAdmin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "School admin not found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // // Generate JWT
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
    const token = jwt.sign(
      { userId: admin._id },
      ACCESS_TOKEN,
      //   "e0b0177a29ba253a8e9dd2c622f1e5858a5ae155d11fe70dc1620c810682f8b8514587fa67f546ef30c0cc8f7ec3278c6db03420ac6fb2809978aad83101ce82",
      {
        expiresIn: "1h",
      }
    );

    // Store token in session
    req.session.token = token;
    // res.status(200).json({ message: "success" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.logoutSchoolAdmin = async (req, res) => {
  try {
    // Clear token from session
    req.session.token = null;

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
