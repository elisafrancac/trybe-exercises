// Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida
// A fórmula para calcular velocidade média é distância / tempo .
// Armazene o script no arquivo velocidade.js.
// Agora, permita que o script seja executado através do comando npm run velocidade . Para isso,
// crie a chave velocidade dentro do objeto scripts no package.json .
// Utilize o readline-sync para solicitar os dados à pessoa.
// Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com
// números inteiros.
const readline = require('readline-sync');
const dist = readline.questionInt('Qual a distância? (em metros) ');
const time = readline.questionInt('Qual o tempo? (em segundos) ');
const calcDistance = () => {
  const distance = dist / time;
  console.log(`A velocidade média é ${ distance.toFixed(2) } m/s`);
}
calcDistance();
