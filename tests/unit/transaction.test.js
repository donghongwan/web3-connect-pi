// tests/unit/transaction.test.js

const Transaction = require('../../src/models/transactionModel');

describe('Transaction Model', () => {
    it('should create a valid transaction', async () => {
        const transaction = new Transaction({
            amount: 100,
            type: 'credit',
            userId: '12345',
        });
        const savedTransaction = await transaction.save();
        expect(savedTransaction.amount).toBe(100);
        expect(savedTransaction.type).toBe('credit');
    });

    it('should fail validation for missing amount', async () => {
        const transaction = new Transaction({
            type: 'debit',
            userId: '12345',
        });
        await expect(transaction.save()).rejects.toThrow();
    });
});
