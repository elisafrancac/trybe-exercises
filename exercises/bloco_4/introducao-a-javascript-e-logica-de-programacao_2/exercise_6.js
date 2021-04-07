let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let atual = 0;
let totalOddNumbers = 0;

for (let index = 0; index < numbers.length; index = index + 1){
    atual = numbers[index];
    if (atual % 2 !== 0) {
        totalOddNumbers = totalOddNumbers + 1;
    }
}
if (totalOddNumbers === 0){
    console.log('Nenhum valor ímpar encontrado')
}
console.log(totalOddNumbers)
