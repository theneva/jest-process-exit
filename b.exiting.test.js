const subject = require('./subject');

test('with exit', () => {
    const result = subject({ shouldExit: true });
    expect(result).toBe('success');
})
