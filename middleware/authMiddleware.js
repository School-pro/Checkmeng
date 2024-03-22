// // authMiddleware.js

// const authenticateUser = (req, res, next) => {
//   // Implement user authentication logic here
//   // Verify user credentials, manage sessions, etc.
//   // For example, check if the user is logged in
//   if (req.session.user) {
//     next(); // User is authenticated, proceed to the next middleware or route handler
//   } else {
//     res.status(401).json({ message: "Unauthorized" }); // User is not authenticated, send 401 Unauthorized response
//   }
// };

// module.exports = { authenticateUser };

// authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.userId });
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = { authenticateUser };
