const main = require('./index.js');

const tests = [
    {
        'params': [4, 15, 2],
        'expected': 4,
    },
    {
        'params': [5, 2, 1],
        'expected': 2,
    },
    {
        'params': [5, 2, 2],
        'expected': 3,
    },
]

test.each(tests)('main', ({params, expected}) => {
    expect(main(...params)).toBe(expected);
})