// Crie uma API de dados das personagens de Simpsons

const express = require('express');
const rescue = require('express-rescue');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const simpsonsFunctions = require('./functions');

// Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsFunctions.getSimpsonsFile();

  res.status(200).json(simpsons);
}));

  // Crie um endpoint GET /simpsons/:id
  // O endpoint deve retornar o personagem com o id informado na URL da requisição.
  // Caso não exista nenhum personagem com o id especificado, retorne o 
  // JSON { message: 'simpson not found' } com o status 404 - Not Found .

  app.get('/simpsons/:id', rescue(async (req, res) => {
    const simpsons = await simpsonsFunctions.getSimpsonsFile();

    const simpson = simpsons.find(({ id }) => id === parseFloat(req.params.id));

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);

// Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body 
// vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar 
// res.status(204).end(); .

app.post('/simpsons', rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsFunctions.getSimpsonsFile();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsFunctions.setNewFile(simpsons);

    res.status(204).end();
  }));

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});
