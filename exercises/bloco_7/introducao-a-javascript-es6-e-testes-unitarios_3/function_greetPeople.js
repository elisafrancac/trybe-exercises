const assert = require('assert');

const greetPeople = (people) => {
    let greeting = [];
  
    for (const person in people) {
      greeting.push(`Hello ${people[person]}`);
    }
    return greeting;
  };
  console.log(greetPeople(['Irina', 'Ashleigh', 'Elsa']));
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.strictEqual(typeof greetPeople, 'function');
  assert.deepStrictEqual(greetPeople(parameter), result);