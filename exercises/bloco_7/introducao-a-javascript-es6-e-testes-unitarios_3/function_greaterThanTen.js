const assert = require('assert');

const greaterThanTenNew = (array) => {
  const results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};
console.log(greaterThanTenNew([4, 10, 32, 9, 21]));

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTenNew, 'function');
assert.deepStrictEqual(greaterThanTenNew(parameter), result);