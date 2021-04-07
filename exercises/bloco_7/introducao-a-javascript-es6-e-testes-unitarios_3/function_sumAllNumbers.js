const assert = require('assert');
const sumAllNumbers = (numbersArray) => {
    let total = 0;
    numbersArray.forEach((number) => {
        total += number;
    })
    return total;
}
console.log(sumAllNumbers([9, 23, 10, 3, 8]));

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);