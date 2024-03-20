// Example code for creating classes and arms
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const otherRoutes = require("./routes/otherRoutes");
const navigationRoutes = require("./controllers/navigationController");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json);
app.use("/api", userRoutes);
app.use("/api", otherRoutes);
app.use("/", navigationRoutes);

// Database connection
mongoose.connect("mongodb://localhost:27017/checkmeng", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
if (db) console.log("Database connection successful");

// // Schema for classes and arms
// const classSchema = new mongoose.Schema({
//   name: String,
//   arms: [String],
// });

// const Class = mongoose.model("Class", classSchema);

// Route for creating classes and arms
// app.post("/classes", (req, res) => {
//   const { name, arms } = req.body;

//   const newClass = new Class({ name, arms });
//   newClass.save((err, savedClass) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Error creating class");
//     } else {
//       res.status(201).send(savedClass);
//     }
//   });
// });

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
