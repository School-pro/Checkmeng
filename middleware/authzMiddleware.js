// // authzMiddleware.js

// const authorizeAdmin = (req, res, next) => {
//   // Implement authorization logic here
//   // Check if the user is a school admin
//   // For example, check if the user role is 'admin'
//   if (req.session.user && req.session.user.role === "admin") {
//     next(); // User is authorized, proceed to the next middleware or route handler
//   } else {
//     res.status(403).json({ message: "Forbidden" }); // User is not authorized, send 403 Forbidden response
//   }
// };

// module.exports = { authorizeAdmin };
// authMiddleware.js
const authorizeUser = (requiredRole) => (req, res, next) => {
  if (req.user.role !== requiredRole) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = { authorizeUser };
