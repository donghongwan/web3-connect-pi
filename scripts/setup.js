// scripts/setup.js

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Configuration
const config = {
    envFile: '.env', // Environment file
    requiredEnvVars: ['MONGODB_URI', 'JWT_SECRET', 'PORT'], // Required environment variables
};

// Function to create .env file
const createEnvFile = () => {
    const envContent = `
# Environment Variables
MONGODB_URI=mongodb://localhost:27017/yourdb
JWT_SECRET=your_jwt_secret
PORT=5000
    `.trim();

    fs.writeFileSync(path.join(__dirname, config.envFile), envContent);
    console.log(`Created ${config.envFile} file with default values.`);
};

// Function to install dependencies
const installDependencies = () => {
    return new Promise((resolve, reject) => {
        exec('npm install', (error, stdout, stderr) => {
            if (error) {
                console.error('Error installing dependencies:', stderr);
                return reject(error);
            }
            console.log(stdout);
            resolve();
        });
    });
};

// Main setup function
const setup = async () => {
    try {
        console.log('Starting setup process...');

        // Step 1: Create .env file if it doesn't exist
        if (!fs.existsSync(path.join(__dirname, config.envFile))) {
            createEnvFile();
        } else {
            console.log(`${config.envFile} already exists. Skipping creation.`);
        }

        // Step 2: Install dependencies
        console.log('Installing dependencies...');
        await installDependencies();

        console.log('Setup completed successfully!');
    } catch (error) {
        console.error('Setup failed:', error);
    }
};

// Execute the setup
setup();
