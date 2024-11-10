// src/middleware/errorMiddleware.js

const { logger } = require('../utils/logger');

// Error handling middleware
const errorMiddleware = (err, req, res, next) => {
    logger.log('error', err.message); // Log the error message

    // Set the response status code based on the error type
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message: err.message || 'Internal Server Error',
    });
};

module.exports = errorMiddleware;
