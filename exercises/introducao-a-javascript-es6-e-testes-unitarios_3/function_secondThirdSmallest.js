const assert = require('assert');

function secondThirdSmallestNew(array) {
    const results = []
    array.sort((x, y) => {
        return x - y;
    });
    results.push(array[1], array[2]);
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallestNew, 'function');
assert.deepStrictEqual(secondThirdSmallestNew(parameter), result);