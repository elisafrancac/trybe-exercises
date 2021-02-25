let salarioBruto = 3000.00;
let descontoInss = 0.08;
let descontoImpostoDeRenda = 0;
let parcelaIR = 0;
let totalComDescontoIR;
let salarioLiquido;


if (salarioBruto <= 1556.94) {
    salarioLiquido = salarioBruto - (salarioBruto * descontoInss);
} 
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoInss = 0.09;
    salarioLiquido = salarioBruto - (salarioBruto * descontoInss);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    descontoInss = 0.11;
    salarioLiquido = salarioBruto - (salarioBruto * descontoInss);
}
else { 
    descontoInss = 570.88;
    salarioLiquido = salarioBruto - descontoInss;
}

console.log(salarioLiquido);

if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    descontoImpostoDeRenda = 0.075;
    parcelaIR = 142.80;
    totalComDescontoIR = (salarioLiquido * descontoImpostoDeRenda) - parcelaIR;
    salarioLiquido = salarioLiquido - totalComDescontoIR;
}
else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
    descontoImpostoDeRenda = 0.15;
    parcelaIR = 354.80;
    totalComDescontoIR = (salarioBruto * descontoImpostoDeRenda) - parcelaIR;
    salarioLiquido = salarioLiquido  - totalComDescontoIR;
}
else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    descontoImpostoDeRenda = 0.225;
    parcelaIR = 636.13;
    totalComDescontoIR = (salarioBruto * descontoImpostoDeRenda) - parcelaIR;
    salarioLiquido = salarioLiquido  - totalComDescontoIR;}
else {
    descontoImpostoDeRenda = 0.275;
    parcelaIR = 869.36;
    totalComDescontoIR = (salarioBruto * descontoImpostoDeRenda) - parcelaIR;
    salarioLiquido = salarioLiquido  - totalComDescontoIR;
}
    console.log(salarioLiquido);
