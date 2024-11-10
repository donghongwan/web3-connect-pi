// src/api/routes/appRoutes.js

const express = require('express');
const { connectApp } = require('../controllers/appController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Connect a Web3 application
router.post('/connect', authenticate, connectApp);

module.exports = router;
