// src/routes/appRoutes.js

const express = require('express');
const App = require('../models/appModel');
const { logger } = require('../utils/logger');

const router = express.Router();

// Create a new app
router.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;
        const newApp = new App({ name, description, userId: req.userId });
        await newApp.save();
        logger.log('info', `App created: ${name}`);
        res.status(201).json({ message: 'App created successfully', appId: newApp._id });
    } catch (error) {
        logger.log('error', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get all apps for the authenticated user
router.get('/', async (req, res) => {
    try {
        const apps = await App.find({ userId: req.userId });
        res.status(200).json(apps);
    } catch (error) {
        logger.log('error', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
