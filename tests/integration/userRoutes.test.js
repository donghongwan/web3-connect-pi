// tests/integration/userRoutes.test.js

const request = require('supertest');
const app = require('../../index'); // Import the main app
const User = require('../../src/models/userModel');

describe('User  Routes', () => {
    beforeAll(async () => {
        await User.deleteMany(); // Clear the database before tests
    });

    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123',
            });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User  registered successfully');
    });

    it('should fail to register a user with an existing email', async () => {
        await request(app)
            .post('/api/users/register')
            .send({
                username: 'testuser2',
                email: 'test@example.com',
                password: 'password123',
            });
        const response = await request(app)
            .post('/api/users/register')
            .send({
                username: 'testuser3',
                email: 'test@example.com',
                password: 'password123',
            });
        expect(response.status).toBe(400);
    });
});
