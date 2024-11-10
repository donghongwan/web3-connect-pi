// tests/e2e/app.e2e.test.js

const request = require('supertest');
const app = require('../../index');
const User = require('../../src/models/userModel');

describe('End-to-End Tests', () => {
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

    it('should register, create an app, and retrieve it', async () => {
        const registerResponse = await request(app)
            .post('/api/users/register')
            .send({
                username: 'newuser',
                email: 'new@example.com',
                password: 'password123',
            });
        expect(registerResponse.status).toBe(201);

        const appResponse = await request(app)
            .post('/api/apps')
            .set('Authorization', `Bearer ${userId}`)
            .send({
                name: 'New Test App',
                description: 'This is a new test app',
            });
        expect(appResponse.status).toBe(201);

        const getAppsResponse = await request(app)
            .get('/api/apps')
            .set('Authorization', `Bearer ${userId}`);
        expect(getAppsResponse.status).toBe(200);
        expect(getAppsResponse.body).toContainEqual(expect.objectContaining({ name: 'New Test App' }));
    });
});
