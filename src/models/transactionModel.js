// src/models/transactionModel.js

const mongoose = require('mongoose');

// Transaction schema definition
const transactionSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    transactionType: {
        type: String,
        enum: ['transfer', 'purchase', 'sale'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Pre-save hook to log transaction details
transactionSchema.pre('save', function(next) {
    console.log(`Transaction from ${this.fromUserId} to ${this.toUserId} of amount ${this.amount}`);
    next();
});

// Transaction model export
module.exports = mongoose.model('Transaction', transactionSchema);
