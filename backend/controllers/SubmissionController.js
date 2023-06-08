const Submission = require('../models/Submission');

// Controller method to handle the creation of a new submission
const createSubmission = async (req, res) => {
  try {
    // Extract the necessary data from the request body
    const { userId, typingSpeed, mistakes } = req.body;

    // Create a new submission instance
    const submission = new Submission({
      userId,
      typingSpeed,
      mistakes,
    });

    // Save the submission to the database
    const newSubmission = await submission.save();

    res.status(201).json(newSubmission);
  } catch (error) {
    console.error('Failed to create submission:', error);
    res.status(500).json({ message: 'Failed to create submission' });
  }
};

// New function to get submissions by user ID
const getSubmissionsByUserId = async (req, res) => {
  try {
    const submissions = await Submission.find({ userId: req.params.userId });
    res.status(200).json(submissions);
  } catch (error) {
    console.error('Failed to get submissions:', error);
    res.status(500).json({ message: 'Failed to get submissions' });
  }
};

module.exports = {
  createSubmission,
  getSubmissionsByUserId, // Make sure this is included in the exports
};
