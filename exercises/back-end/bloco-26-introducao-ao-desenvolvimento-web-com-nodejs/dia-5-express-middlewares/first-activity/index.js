const express = require('express');
const user = require('./routers/user');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/user', user);

app.listen(3000, () => console.log('Porta 3000'));
