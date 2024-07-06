// // subjectModel.js
// const mongoose = require("mongoose");

// const subjectSchema = new mongoose.Schema({
//   subject: {
//     type: String,
//     enum: [
//       "Mathematics",
//       "English",
//       "Basic Science",
//       "Agricultural Science",
//       "Physical And Health Science",
//       "Native Language (IGBO, YORUBA, HAUSA",
//     ],
//     default: [
//       "Mathematics",
//       "English",
//       "Basic Science",
//       "Agricultural Science",
//       "Physical And Health Science",
//       "Native Language (IGBO, YORUBA, HAUSA",
//     ],
//   },

//   // Add additional fields as needed
// });

// const Subject = mongoose.model("Subject", subjectSchema);

// module.exports = Subject;

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
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
