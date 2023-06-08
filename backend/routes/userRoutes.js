const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// POST request to create a new user
router.post('/', UserController.createUser);

module.exports = router;
