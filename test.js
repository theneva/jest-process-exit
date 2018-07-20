const subject = require('./subject');

test('sup', () => {
    const result = subject({ shouldExit: false });
    expect(result).toBe('success');
})
