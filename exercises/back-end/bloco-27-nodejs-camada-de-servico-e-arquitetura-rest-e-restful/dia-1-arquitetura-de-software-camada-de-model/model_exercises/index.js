const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const middlewares = require('./middlewares')
const PORT = 3000;

app.use(bodyParser.json());

app.post('/user', middlewares.createUser);

app.use(middlewares.error);

app.listen(PORT, console.log(`Conectado na porta ${PORT}`));
