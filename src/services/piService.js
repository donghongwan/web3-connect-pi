// src/services/piService.js

const axios = require('axios');

class PiService {
    constructor() {
        this.apiUrl = process.env.PI_API_URL; // Base URL for Pi Network API
    }

    async getUser Profile(userId) {
        try {
            const response = await axios.get(`${this.apiUrl}/users/${userId}`);
            return response.data; // Return user profile data
        } catch (error) {
            throw new Error('Error fetching user profile: ' + error.message);
        }
    }

    async transferPi(fromUser Id, toUser Id, amount) {
        try {
            const response = await axios.post(`${this.apiUrl}/transactions/transfer`, {
                fromUser Id,
                toUser Id,
                amount,
            });
            return response.data; // Return transaction details
        } catch (error) {
            throw new Error('Error transferring Pi: ' + error.message);
        }
    }
}

module.exports = new PiService();
