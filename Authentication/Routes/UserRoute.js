const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controller/UserController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticate, getUserProfile);

module.exports = router;
