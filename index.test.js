const sum = require('./index');

test('add 1 plus 2 to equal', () => {
    expect(sum(1,2)).toBe(3)

});