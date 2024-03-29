// 1. Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote Node.js com o npm init chamado my-scripts . 
// Realize os exercícios dentro desse pacote.
// Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
// A fórmula para calcular o IMC é peso / altura ^ 2 .
// Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
// Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
// Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
// Armazene o script no arquivo imc.js .
const readline = require('readline-sync');
const weight = readline.questionFloat('Qual seu peso? ');
const height = readline.questionInt('Qual sua altura? ');
const findImc = () => {
  console.log(`Peso: ${weight}, Altura: ${height}`);
  const result = Math.round((weight / Math.pow(height / 100, 2).toFixed(2)));
  console.log('O IMC é: ' + result) ;
  if (result < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return;
  }
  if (result >= 18.5 && result <= 24.9) {
    console.log('Peso normal');
    return;
  }
  if (result >= 25 && result <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
    return;
  }
  if (result >= 30 && result <= 34.9) {
    console.log('Obesidade grau I');
    return;
  }
  if (result >= 35 && result <= 39.9) {
    console.log('Obesidade grau II');
    return;
  }
  else console.log('Obesidade graus III e IV');
}
findImc();

// 2. Agora, permita que o script seja executado através do comando npm run imc
// O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js .

// 3. Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
// Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?
// Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder
// as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.

// 4. Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
// O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats .
// Encontrou a função? Show! Agora utilize-a para solicitar o input de peso .

// 5. Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
// Considere a seguinte tabela para classificar a situação do IMC:
// | IMC                                       | Situação                  |
// | ----------------------------------------- | ------------------------- |
// | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
// | Entre 18,5 e 24,9                         | Peso normal               |
// | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
// | Entre 30,0 e 34,9                         | Obesidade grau I          |
// | Entre 35,0 e 39,9                         | Obesidade grau II         |
// | 40,0 e acima                              | Obesidade graus III e IV  |
