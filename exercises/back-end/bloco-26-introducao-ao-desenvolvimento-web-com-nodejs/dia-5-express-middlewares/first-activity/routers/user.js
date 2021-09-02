const express = require('express');

const router = express.Router();

const {
  validatePassword,
  validateEmail,
  validateUsername
} = require('../middlewares/validations');

const users = [];

const validations = [validateEmail, validateUsername, validatePassword];

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

router.post('/register', validations, (req, res) => {
  const { email, username, password } = req.body;

  users.push({ email, username, password });

  res.status(201).json({ message: 'user created'});

});

// Crie uma rota POST /user/login que receba uma requisição que envie email / password no body da requisição e 
// devolva um token como resposta, onde:
// O formato desse token retornado deve ser uma string aleatória com 12 caracteres;
// O email recebido deve ter o formato email@mail.com;
// O password deve conter no mínimo 4 caracteres e no máximo 8, todos números;
// Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, 
// ex: status 400 e { "message": "email or password is incorrect" }
// Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, 
// ex: status 200 e { "token": "86567349784e" } ;

router.post('/login', validatePassword, validateEmail, (req, res) => {
  const bodyKeys = Object.keys(req.body);

  if(bodyKeys.length === 2) {
    const token = Math.random().toString(36).substr(2, 12).concat('t');
    res.status(201).json({ message: token });
  }
});

module.exports = router;
