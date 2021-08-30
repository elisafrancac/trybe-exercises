// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
