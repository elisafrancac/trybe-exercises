let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let atual = 0;
let biggestNumber = 0;

for (let index = 0; index < numbers.length; index = index + 1){
    atual = numbers[index];
    if (atual > biggestNumber) {
        biggestNumber = atual;
    }
}   
console.log(biggestNumber);
