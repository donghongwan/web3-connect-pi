// src/api/routes/transactionRoutes.js

const express = require('express');
const { transferAssets } = require('../controllers/transactionController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Transfer assets
router.post('/transfer', authenticate, transferAssets);

module.exports = router;
