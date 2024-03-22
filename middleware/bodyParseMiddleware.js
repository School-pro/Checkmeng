// // bodyParserMiddleware.js

// const bodyParser = require("body-parser");

// const parseJsonBody = bodyParser.json();
// const parseUrlEncodedBody = bodyParser.urlencoded({ extended: true });

// module.exports = { parseJsonBody, parseUrlEncodedBody };

// bodyParserMiddleware.js
const bodyParser = require("body-parser");

(module.exports = bodyParser.urlencoded({ extended: true })), bodyParser.json();
