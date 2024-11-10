// tests/unit/app.test.js

const App = require('../../src/models/appModel');

describe('App Model', () => {
    it('should create a valid app', async () => {
        const app = new App({
            name: 'Test App',
            description: 'This is a test app',
            userId: '12345',
        });
        const savedApp = await app.save();
        expect(savedApp.name).toBe('Test App');
    });

    it('should fail validation for missing name', async () => {
        const app = new App({
            description: 'This is a test app',
            userId: '12345',
        });
        await expect(app.save()).rejects.toThrow();
    });
});
