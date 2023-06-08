// models/Performance.js
const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  userId: String,
  typingSpeed: Number,
  mistakes: Number,
  date: { type: Date, default: Date.now },
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
