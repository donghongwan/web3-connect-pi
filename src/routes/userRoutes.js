// src/routes/userRoutes.js

const express = require('express');
const { validateUser Registration, validateUser Login, handleValidationErrors } = require('../utils/validators');
const User = require('../models/userModel');
const { logger } = require('../utils/logger');

const router = express.Router();

// User registration route
router.post('/register', validateUser Registration, handleValidationErrors, async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser  = new User({ username, email, password });
        await newUser .save();
        logger.log('info', `User  registered: ${username}`);
        res.status(201).json({ message: 'User  registered successfully' });
    } catch (error) {
        logger.log('error', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// User login route
router.post('/login', validateUser Login, handleValidationErrors, async (req, res) => {
    // Implement login logic here
});

module.exports = router;
