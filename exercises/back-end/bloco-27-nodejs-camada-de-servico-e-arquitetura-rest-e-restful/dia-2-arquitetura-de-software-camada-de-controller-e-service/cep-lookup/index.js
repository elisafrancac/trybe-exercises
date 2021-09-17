require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/error.js');

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());
// Crie uma nova API utilizando o express
// A aplicação deve ser um pacote Node.js
// Dê ao pacote o nome de cep-lookup
// Utilize o express para gerenciar os endpoints da sua aplicação
// A aplicação deve ter a rota GET /ping , que retorna o status 200 OK e o seguinte JSON: { "message": "pong!" }
app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

// Crie o endpoint GET /cep/:cep
// O endpoint deve receber, no parâmetro :cep , um número de CEP válido.
// O CEP precisa conter 8 dígitos numéricos e pode ou não possuir traço.
app.get('/cep/:cep', Cep.findAddressByCep);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
