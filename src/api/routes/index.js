// src/api/routes/index.js

const express = require('express');
const userRoutes = require('./userRoutes');
const appRoutes = require('./appRoutes');
const transactionRoutes = require('./transactionRoutes');

const router = express.Router();

// User routes
router.use('/users', userRoutes);

// Application routes
router.use('/apps', appRoutes);

// Transaction routes
router.use('/transactions', transactionRoutes);

module.exports = router;
