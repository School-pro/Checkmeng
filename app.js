const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const userRoutes = require("./routes/userRoutes");
// const otherRoutes = require("./routes/otherRoutes");
const navigationRoutes = require("./routes/navRoutes");
const session = require("express-session");
const authRoutes = require("./routes/auth/authRoutes");
const app = express();
const ACCESS = process.env.ACCESS_TOKEN;
require("dotenv").config();

// Use session middleware

app.use(
  session({
    secret: ACCESS,
    // "e0b0177a29ba253a8e9dd2c622f1e5858a5ae155d11fe70dc1620c810682f8b8514587fa67f546ef30c0cc8f7ec3278c6db03420ac6fb2809978aad83101ce82", // Replace with your secret key
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", navigationRoutes);
app.use("/api", userRoutes);
app.use("/auth", authRoutes);
// app.use("/api", otherRoutes);

// Serve static files from the "public" directory
app.use(express.static("public"));

app.set("view engine", "ejs");

// Database connection
mongoose.connect("mongodb://localhost:27017/checkmeng", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
const db = mongoose.connection;
if (db) console.log("Database connection successful");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Example code for customizing result compilation sections
// This can be similar to the above route but for settings

// Example code for generating unique links for school portals
// This can be done using a function that generates a unique link based on the school's name or ID

// Example code for assigning unique identification codes to students' results
// This can be done when saving the student's result data to the database

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
