// resultModel.js
const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  term: { type: String, default: "First Term" },
  grade: ["A", "B", "C", "D", "E", "F", { default: "" }],
  position: ["1st", "2nd", { default: "" }],
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  date: { type: Date, default: Date.now() },
  // Add additional fields such as attendance, test scores, etc.
  attendance: { type: Number, default: 50 },
  games: [
    "Football",
    "Basketball",
    "Volleyball",
    "Swimming",
    "Race",
    "Biking",
    { default: "Football" },
  ],
  sportsRatings: { type: Number, default: 5 },
  punctuality: { type: Number },
  behaviorTowardLearning: [
    "Great",
    "Average",
    "Needs improvement",
    { default: "Average" },
  ],
  cleaniness: { type: Number, default: 3 },
});

const Result = mongoose.models.Result || mongoose.model("Result", resultSchema);

module.exports = Result;
