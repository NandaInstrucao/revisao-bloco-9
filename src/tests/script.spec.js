const { fetchCoins } = require('../src/teste');

describe('1 - Teste a função fecthCoins', () => {
    it('fetchCoins deve ser uma função', () => {
        expect(typeof fetchCoins).toBe('function');
    });
});