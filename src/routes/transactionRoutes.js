// src/routes/transactionRoutes.js

const express = require('express');
const Transaction = require('../models/transactionModel');
const { logger } = require('../utils/logger');

const router = express.Router();

// Create a new transaction
router.post('/', async (req, res) => {
    try {
        const { amount, type } = req.body;
        const newTransaction = new Transaction({ amount, type, userId: req.userId });
        await newTransaction.save();
        logger.log('info', `Transaction created: ${amount} - ${type}`);
        res.status(201).json({ message: 'Transaction created successfully', transactionId: newTransaction._id });
    } catch (error) {
        logger.log('error', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get all transactions for the authenticated user
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.userId });
        res.status(200).json(transactions);
    } catch (error) {
        logger.log('error', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
