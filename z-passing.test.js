const subject = require('./subject');

test('without exit', () => {
    const result = subject({ shouldExit: false });
    expect(result).toBe('success');
})
