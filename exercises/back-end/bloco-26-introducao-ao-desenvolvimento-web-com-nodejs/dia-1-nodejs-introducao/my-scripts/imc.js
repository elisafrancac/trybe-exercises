// Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote Node.js com o npm init chamado my-scripts . 
// Realize os exercícios dentro desse pacote.
// Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
// A fórmula para calcular o IMC é peso / altura ^ 2 .
// Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
// Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
// Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
// Armazene o script no arquivo imc.js .
const readline = require('readline-sync');
const weight = readline.questionInt('Qual seu peso? ');
const height = readline.questionInt('Qual sua altura? ');
const findImc = () => {
  console.log(`Peso: ${weight}, Altura: ${height}`);
  const result = Math.round((weight / Math.pow(height / 100, 2).toFixed(2)));
  console.log('O IMC é: ' + result) ;
}
findImc();

    // Agora, permita que o script seja executado através do comando npm run imc
    // O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js .

// Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
// Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?
// Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder
// as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.
