const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const middlewares = require('./middlewares')
const PORT = 3000;

app.use(bodyParser.json());

app.post('/user', middlewares.createUser);

app.get('/user', middlewares.getAllUsers);

app.get('/user/:id', middlewares.getUser);

app.put('/user/:id', middlewares.updateUser);

app.use(middlewares.error);

app.listen(PORT, console.log(`Conectado na porta ${PORT}`));
