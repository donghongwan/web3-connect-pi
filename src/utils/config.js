// src/utils/config.js

const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Configuration settings
const config = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    WEB3_PROVIDER_URL: process.env.WEB3_PROVIDER_URL,
    PI_API_URL: process.env.PI_API_URL,
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
};

// Export the configuration settings
module.exports = config;
