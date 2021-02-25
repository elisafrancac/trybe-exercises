let custoDoProduto = 30;
let valorDaVenda = 85;

if (custoDoProduto < 0 || valorDaVenda < 0) {
    console.log("Valor inválido");
    return;
}

let impostoSobreOCusto = custoDoProduto * 0.20;
let valorCustoTotal = custoDoProduto + impostoSobreOCusto;
let lucroUnitario = valorDaVenda - valorCustoTotal;
let lucroTotal = lucroUnitario * 1000;

console.log(lucroTotal);

