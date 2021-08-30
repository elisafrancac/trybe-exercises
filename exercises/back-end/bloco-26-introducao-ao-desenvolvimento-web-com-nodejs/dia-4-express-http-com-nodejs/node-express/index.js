// Inicie os exercícios criando uma aplicação Node.js com os comandos já aprendidos.
// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
const express = require('express');

const app = express();

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});

// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
