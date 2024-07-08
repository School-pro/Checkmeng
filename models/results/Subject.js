const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    enum: [
      "Mathematics",
      "English",
      "Basic Science",
      "Agricultural Science",
      "Physical And Health Science",
      "Native Language",
    ],
  },
  nativeLanguage: {
    type: String,
    enum: ["IGBO", "YORUBA", "HAUSA"],
    required: function () {
      return this.subject === "Native Language";
    },
  },

  // Add additional fields as needed
  // HAVE A FUNCTION TO CREATE A
  // PARAMETER FOR EACH SUBJECT CREATED
  // AND THEN ASSIGN IT A VALUE

  // E.G
  // ENGLISH: "A",
  // MATHS: "B",
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
