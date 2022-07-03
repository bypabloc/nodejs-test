const main = require('./index.js');

test('main', () => {
    expect(main('Hello World')).toBe('Hello Worlda');
});
