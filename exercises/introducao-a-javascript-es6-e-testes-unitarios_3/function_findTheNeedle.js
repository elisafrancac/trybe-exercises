const assert = require('assert');
const findTheNeedle = (arr, str) => {
    let needlePosition = -1;
    arr.forEach((element, indexNumber) => {
        if (element === str) {
            needlePosition = indexNumber;
        }
    })
    return needlePosition;
}

console.log(findTheNeedle(['plant', 'shelf', 'arrow', 'bird'], 'plat'));

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);