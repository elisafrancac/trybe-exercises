
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names
    .reduce((previousValue, currentValue) =>
      previousValue + currentValue.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') {
          acumulator += 1;       
        }
        return acumulator;
      }, 0), 0);
}

console.log(containsA());
assert.deepStrictEqual(containsA(), 20);