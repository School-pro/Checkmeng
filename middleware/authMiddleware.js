const jwt = require("jsonwebtoken");
const SchoolAdmin = require("../models/users/SchoolAdmin");
const mongoose = require("mongoose");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    const adminId = decoded.userId;

    // Validate adminId
    if (!adminId || !mongoose.Types.ObjectId.isValid(adminId)) {
      return res.status(400).json({ message: "Invalid admin ID" });
    }

    // Check if admin exists in the database
    const admin = await SchoolAdmin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    req.user = adminId; // Attach admin ID to request object
    next();
  } catch (error) {
    console.error(`Authentication error: ${error.message}`);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
