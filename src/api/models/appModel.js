// src/api/models/appModel.js

const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('App', appSchema);
