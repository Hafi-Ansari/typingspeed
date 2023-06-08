const express = require('express');
const submissionController = require('../controllers/SubmissionController');

const router = express.Router();

// POST route to create a new submission
router.post('/', submissionController.createSubmission);

// GET route to get a current user
router.get('/:userId', submissionController.getSubmissionsByUserId);

module.exports = router;
