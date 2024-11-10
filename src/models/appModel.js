// src/models/appModel.js

const mongoose = require('mongoose');

// Web3 application schema definition
const appSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Pre-save hook to update the updatedAt field
appSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Web3 application model export
module.exports = mongoose.model('App', appSchema);
