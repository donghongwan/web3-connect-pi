// src/api/routes/userRoutes.js

const express = require('express');
const { registerUser , loginUser  } = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// User registration
router.post('/register', registerUser );

// User login
router.post('/login', loginUser );

// Get user profile (protected route)
router.get('/profile', authenticate, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;
