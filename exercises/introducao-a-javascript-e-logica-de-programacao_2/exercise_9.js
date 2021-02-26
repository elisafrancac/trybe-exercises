let numbers = [];
let divisao = 0;

for (index = 1; index <= 25; index = index + 1) {
    numbers.push(index);
}

for (contador = 0; contador < numbers.length; contador = contador + 1) {
    divisao = (numbers[contador] / 2);
    console.log(divisao);
}
