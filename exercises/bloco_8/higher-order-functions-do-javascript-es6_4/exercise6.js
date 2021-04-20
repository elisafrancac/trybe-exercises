const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
    const gradesObjects = grades.map((element) => element.reduce((acc, curr) => {
      return Math.round((acc + curr / element.length) * 100) / 100;
      }, 0));
    const studentsObjects = students.map((student, index) => {
        return {name: student, average: gradesObjects[index]}
    });
    return studentsObjects;
}
console.log(studentAverage())

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
