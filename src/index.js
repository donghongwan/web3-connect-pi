// index.js

const express = require('express');
const mongoose = require('mongoose');
const config = require('./src/utils/config');
const { logger } = require('./src/utils/logger');
const authMiddleware = require('./src/middleware/authMiddleware');
const errorMiddleware = require('./src/middleware/errorMiddleware');

// Import routes
const userRoutes = require('./src/routes/userRoutes');
const appRoutes = require('./src/routes/appRoutes');
const transactionRoutes = require('./src/routes/transactionRoutes');

// Initialize the Express application
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    logger.log('info', 'Connected to MongoDB');
})
.catch(err => {
    logger.log('error', `Failed to connect to MongoDB: ${err.message}`);
    process.exit(1); // Exit the process if the database connection fails
});

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/apps', authMiddleware, appRoutes); // Protect app routes with auth middleware
app.use('/api/transactions', authMiddleware, transactionRoutes); // Protect transaction routes with auth middleware

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = config.PORT;
app.listen(PORT, () => {
    logger.log('info', `Server is running on port ${PORT}`);
});
