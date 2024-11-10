// tests/integration/transactionRoutes.test.js

const request = require('supertest');
const app = require('../../index');
const User = require('../../src/models/userModel');
const Transaction = require('../../src/models/transactionModel');

describe('Transaction Routes', () => {
    let userId;

    beforeAll(async () => {
        await User.deleteMany();
        const user = new User({
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123',
        });
        const savedUser = await user.save();
        userId = savedUser._id;
    });

    it('should create a new transaction', async () => {
        const response = await request(app)
            .post('/api/transactions')
            .set('Authorization', `Bearer ${userId}`)
            .send({
                amount: 100,
                type: 'credit',
            });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Transaction created successfully');
    });

    it('should get all transactions for the user', async () => {
        const response = await request(app)
            .get('/api/transactions')
            .set('Authorization', `Bearer ${userId}`);
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
