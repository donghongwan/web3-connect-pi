// src/api/controllers/transactionController.js

const Transaction = require('../models/transactionModel');

// Transfer assets
exports.transferAssets = async (req, res) => {
    const { toUserId, amount } = req.body;
    const fromUserId = req.user.id; // Get user ID from authenticated request

    try {
        // Logic to perform the asset transfer
        // This could involve updating user balances and creating a transaction record
        const transaction = new Transaction({ fromUserId, toUserId, amount });
        await transaction.save();

        res.json({ message: 'Transfer successful', transactionId: transaction._id });
    } catch (error) {
        res.status(500).json({ error: 'Error transferring assets' });
    }
};
