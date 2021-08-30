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
