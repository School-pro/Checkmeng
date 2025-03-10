// // errorMiddleware.js

// const errorHandler = (err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// };

// module.exports = { errorHandler };

// errorMiddleware.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
};

module.exports = { errorHandler };
