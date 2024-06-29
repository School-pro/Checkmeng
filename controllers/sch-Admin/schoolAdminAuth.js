// 1. Create an account for a school

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SchoolAdmin = require("../../models/users/SchoolAdmin");
const School = require("../../models/users/students/School");

// const School = require("../../models/users/students/School");
const Class = require("../../models/users/students/Class");
const Arm = require("../../models/users/students/Arm");

exports.registerSchoolAdmin = async (req, res) => {
  try {
    const { username, email, password, school, schoolAddress, classes } =
      req.body;

    // Validate request body
    if (!username || !email || !password || !school) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if school admin already exists
    const existingEmail = await SchoolAdmin.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Check if school admin name already exists
    const existingAdminName = await SchoolAdmin.findOne({ username });
    if (existingAdminName) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Check if School Name already exists
    const existingSchool = await School.findOne({ name: school });
    if (existingSchool) {
      return res.status(400).json({ message: "School already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new school admin
    const newAdmin = new SchoolAdmin({
      username,
      email,
      password: hashedPassword,
      school,
      schoolAddress,
    });

    // Create and save the school
    const newSchool = new School({
      name: school,
      email: email,
      address: schoolAddress,
    });

    const savedSchool = await newSchool.save();

    // Create classes
    const classIds = [];
    for (const classData of classes) {
      const newClass = new Class({
        className: classData.className,
        schoolId: savedSchool._id,
      });

      const savedClass = await newClass.save();
      classIds.push(savedClass._id);
    }

    // Update school with class references
    savedSchool.classes = classIds;
    await savedSchool.save();

    // Save the new admin
    await newAdmin.save();

    res.status(201).json({ admin: newAdmin, school: savedSchool });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// School Admin retreiving all the other administrators
// Get all school admins
exports.getAllSchoolAdmins = async (req, res) => {
  try {
    const schoolAdmins = await SchoolAdmin.find();
    res.status(200).json(schoolAdmins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login School Admin
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
    const token = jwt.sign({ userId: admin._id }, ACCESS_TOKEN, {
      expiresIn: "1h",
    });

    const user = req.user;
    // Store token in session
    req.session.token = token;
    res.status(200).json({ Toke: token });
    // res.status(200).json({ token });
    // res.render("dashboard", { user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// logout school admin
exports.logoutSchoolAdmin = async (req, res) => {
  try {
    // Clear token from session
    req.session.token = null;

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single school admin by ID
exports.getSchoolAdminById = async (req, res) => {
  try {
    const schoolAdmin = await SchoolAdmin.findById(req.params.id);
    if (!schoolAdmin) {
      return res.status(404).json({ message: "School admin not found" });
    }
    res.status(200).json(schoolAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a school admin by ID
exports.updateSchoolAdminById = async (req, res) => {
  try {
    const schoolAdmin = await SchoolAdmin.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!schoolAdmin) {
      return res.status(404).json({ message: "School admin not found" });
    }
    res.status(200).json({ Success: schoolAdmin });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a school admin by ID
exports.deleteSchoolAdminById = async (req, res) => {
  try {
    const schoolAdmin = await SchoolAdmin.findByIdAndDelete(req.params.id);
    if (!schoolAdmin) {
      return res.status(404).json({ message: "School admin not found" });
    }
    res.status(204).json({ message: "Admin deleted" });
    // res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
