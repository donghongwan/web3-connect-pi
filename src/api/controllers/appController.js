// src/api/controllers/appController.js

const App = require('../models/appModel');

// Connect a Web3 application
exports.connectApp = async (req, res) => {
    const { appId } = req.body;
    const userId = req.user.id; // Get user ID from authenticated request

    try {
        const app = await App.findById(appId);
        if (!app) {
           return res.status(404).json({ error: 'Application not found' });
        }

        // Logic to connect the app to the user
        // This could involve saving the connection in the database
        res.json({ message: 'App connected successfully', connectionId: appId });
    } catch (error) {
        res.status(500).json({ error: 'Error connecting app' });
    }
};
