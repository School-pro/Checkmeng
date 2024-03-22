// corsMiddleware.js

const cors = require("cors");

const corsOptions = {
  origin: "*", // Allow requests from any origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specified HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specified headers
};

const enableCors = cors(corsOptions);

module.exports = { enableCors };
