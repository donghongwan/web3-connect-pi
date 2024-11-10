// src/services/authService.js

const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {
    async register(username, email, password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser  = new User({ username, email, password: hashedPassword });
            await newUser .save();
            return { message: 'User  registered successfully' };
        } catch (error) {
            throw new Error('Error registering user: ' + error.message);
        }
    }

    async login(email, password) {
        try {
            const user = await User.findOne({ email });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                throw new Error('Invalid credentials');
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return { token };
        } catch (error) {
            throw new Error('Error logging in: ' + error.message);
        }
    }

    async getUser FromToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return await User.findById(decoded.id);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}

module.exports = new AuthService();
