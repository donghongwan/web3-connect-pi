// tests/unit/user.test.js

const User = require('../../src/models/userModel');
const { validateUser Registration } = require('../../src/utils/validators');

describe('User  Model', () => {
    it('should create a valid user', async () => {
        const user = new User({
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123',
        });
        const savedUser  = await user.save();
        expect(savedUser .username).toBe('testuser');
        expect(savedUser .email).toBe('test@example.com');
    });

    it('should fail validation for invalid email', async () => {
        const user = new User({
            username: 'testuser',
            email: 'invalid-email',
            password: 'password123',
        });
        await expect(user.save()).rejects.toThrow();
    });
});
