// tests/integration/appRoutes.test.js

const request = require('supertest');
const app = require('../../index');
const User = require('../../src/models/userModel');
const App = require('../../src/models/appModel');

describe('App Routes', () => {
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

    it('should create a new app', async () => {
        const response = await request(app)
            .post('/api/apps')
            .set('Authorization', `Bearer ${userId}`) // Assuming you have a way to authenticate
            .send({
                name: 'Test App',
                description: 'This is a test app',
            });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('App created successfully');
    });

    it('should get all apps for the user', async () => {
        const response = await request(app)
            .get('/api/apps')
            .set('Authorization', `Bearer ${userId}`);
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
