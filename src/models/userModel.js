// src/models/userModel.js

const mongoose = require('mongoose');

// User schema definition
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
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
    connectedApps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'App',
    }],
});

// Pre-save hook to update the updatedAt field
userSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// User model export
module.exports = mongoose.model('User ', userSchema);
