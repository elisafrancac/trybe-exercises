const assert = require('assert');

// Escreva uma função greet que, dado o nome de uma pessoa, 
// retorna uma mensagem de cumprimento:


const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;
console.log(greet('John'));

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');