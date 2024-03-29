// Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar 
// os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure 
// não utilizar callbacks.
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por 
// exemplo: 1 - Homer Simpson .
const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => {
//     return JSON.parse(fileContent);
//   })
//   .then((simpsonsArray) => {
//     return simpsonsArray.map(({ id, name }) => `${id} - ${name}`);
//   })
//   .then((result) => {
//     return result.forEach((eachResult) => console.log(eachResult));
//   });

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida 
// com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite 
// a Promise com o motivo "id não encontrado".

// const simpsonById = async (id) => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const fileContent = await JSON.parse(file);
//   const getSimpson = fileContent.find((simpson) => simpson.id == id);
//   if (!getSimpson) throw new Error('id não encontrado');
//   else return console.log(getSimpson);
// };
// simpsonById(2);

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// const newSimpsons = async () => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const fileContent = await JSON.parse(file);
//   const filteredSimpsons = fileContent.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
//   await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
// };
// newSimpsons();
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , 
// contendo as personagens com id de 1 a 4.

// const createSimpsonsFamily = async () => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const fileContent = JSON.parse(file);
//   const filteredSimpsons = fileContent.filter(simpson => ['1', '2', '3', '4'].includes(simpson.id));
//   fs.writeFile('./simpsonsFamily.json', JSON.stringify(filteredSimpsons));
// }
// createSimpsonsFamily();
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// const addNelson = async () => {
//   const simpsonsFile = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsonsFileContent = JSON.parse(simpsonsFile);
//   const nelson = simpsonsFileContent.find(simpson => simpson.name == 'Nelson Muntz');
//   const simpsonsFamilyFile = await fs.readFile('./simpsonsFamily.json', 'utf-8');
//   const simpsonsFamilyContent = JSON.parse(simpsonsFamilyFile);
//   simpsonsFamilyContent.push(nelson);
//   fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamilyContent));
// }
// addNelson();
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo 
// simpsonFamily.json .
const replaceNelson = async () => {
  const simpsonsFile = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsFileContent = JSON.parse(simpsonsFile);
  const maggie = simpsonsFileContent.find(simpson => simpson.name == 'Maggie Simpson');
  const simpsonsFamilyFile = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamilyContent = JSON.parse(simpsonsFamilyFile);
  simpsonsFamilyContent.splice(-1, 1, maggie);
  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamilyContent));
};
replaceNelson();
