let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let lastArray = numbers[numbers.length - 1];
let position;
let position2;

for (let index = 1; index < numbers.length; index = index + 1) {
    position = numbers[index];
    position2 = numbers [index+1];

    if (index == numbers.length - 1) {
        newNumbers.push(position * 2);
      }
    else {
        newNumbers.push(position * position2);
    }
    }

console.log(newNumbers);