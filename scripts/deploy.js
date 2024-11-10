// scripts/deploy.js

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
    buildCommand: 'npm run build', // Command to build the application
    testCommand: 'npm test',        // Command to run tests
    serverPath: '/path/to/your/server', // Path to your server
    remoteServer: 'user@yourserver.com', // Remote server for deployment
    remotePath: '/var/www/yourapp', // Path on the remote server
};

// Function to execute shell commands
const executeCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${command}`);
                console.error(stderr);
                return reject(error);
            }
            console.log(stdout);
            resolve(stdout);
        });
    });
};

// Main deployment function
const deploy = async () => {
    try {
        console.log('Starting deployment process...');

        // Step 1: Build the application
        console.log('Building the application...');
        await executeCommand(config.buildCommand);

        // Step 2: Run tests
        console.log('Running tests...');
        await executeCommand(config.testCommand);

        // Step 3: Copy files to the remote server
        console.log('Copying files to the remote server...');
        await executeCommand(`scp -r ${path.join(config.serverPath, '*')} ${config.remoteServer}:${config.remotePath}`);

        // Step 4: Restart the server (assuming you have SSH access)
        console.log('Restarting the server...');
        await executeCommand(`ssh ${config.remoteServer} "pm2 restart yourapp"`); // Using PM2 for process management

        console.log('Deployment completed successfully!');
    } catch (error) {
        console.error('Deployment failed:', error);
    }
};

// Execute the deployment
deploy();
