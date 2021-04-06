const assert = require('assert');
const wordLengths = (stringsArray) => {
    newArray = [];
    stringsArray.forEach((string) => {
        newArray.push(string.length);
    })
    return newArray;
}
console.log(wordLengths(['sun', 'potato', 'roundabout', 'pizza']));

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);