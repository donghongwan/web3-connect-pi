// src/utils/logger.js

const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

// Log a message with a specific level
const log = (level, message) => {
    logger.log({ level, message });
};

// Export the logger and log function
module.exports = {
    logger,
    log,
};
