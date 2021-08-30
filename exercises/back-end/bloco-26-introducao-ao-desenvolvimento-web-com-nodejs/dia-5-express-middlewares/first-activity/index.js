// Atividade 1
// Crie uma rota POST /user/register que receba uma requisição que envie username ,
// email e password no body da requisição, onde:
// * username deve ter mais de 3 caracteres;
// * email deve ter o formato email@mail.com;
// * password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);
// * Para todos os casos não atendidos acima deve ser retornado o código de status e
// um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" } ;
// * Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com
// uma mensagem de sucesso, ex: status 201 e { "message": "user created" } ;

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const users = [];

const errorMessage = { message: 'Invalid data!'};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length <= 4 || password.length >= 9) res.status(400).json(errorMessage);

  next();
};

const validateUsername = (req, res, next) => {
  const { username } = req.body;

  if (username.length <= 3) res.status(400).json(errorMessage);

  next();
};

const validateEmail = (req, res, next) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const { email } = req.body;

  if (!email.match(regex)) res.status(400).json(errorMessage);

  next();
};

const validations = [validateEmail, validateUsername, validatePassword];

app.post('/user/register', validations, (req, res) => {
  const { email, username, password } = req.body;

  users.push({ email, username, password });

  res.status(201).json({ message: 'user created'});

});

app.listen(3000, () => console.log('Porta 3000'));
