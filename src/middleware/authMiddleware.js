// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const { logger } = require('../utils/logger');
const config = require('../utils/config');

// Authentication middleware to verify JWT tokens
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        logger.log('warn', 'No token provided');
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err) {
            logger.log('warn', 'Failed to authenticate token');
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }

        req.userId = decoded.id; // Attach user ID to request object
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = authMiddleware;
