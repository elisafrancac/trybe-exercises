// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const calc = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number") {
        reject('Informe apenas números');
      }
    const result = (a + b) * c;  
    if (result < 50) reject('Valor muito baixo');
    resolve(result);
  });
}

// calc(50, 10, 2)
//   .then(resolve => console.log(resolve))
//   .catch(reject => console.log(reject));

  // Escreva um código para consumir a função construída no exercício anterior.
  // Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. 
  // Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
  // Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  // Utilize then e catch para manipular a Promise retornada pela função:
  // Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
  // Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
  const randomNumber = () => Math.random() * 100 + 1;

  const randomCalc = () => {
    const numbA = randomNumber();
    const numbB = randomNumber();
    const numbC = randomNumber();
    calc(numbA, numbB, numbC)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject));
  }
randomCalc();
