// Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote Node.js com o npm init chamado my-scripts . 
// Realize os exercícios dentro desse pacote.
// Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
// A fórmula para calcular o IMC é peso / altura ^ 2 .
// Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
// Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
// Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
// Armazene o script no arquivo imc.js .
const weight = 70;
const height = 159;
const findImc = (weight, height) => {
  console.log(`Peso: ${weight}, Altura: ${height}`);
  const result = (weight / Math.pow(height / 100, 2).toFixed(2));
  console.log('O IMC é: ' + result) ;
}
