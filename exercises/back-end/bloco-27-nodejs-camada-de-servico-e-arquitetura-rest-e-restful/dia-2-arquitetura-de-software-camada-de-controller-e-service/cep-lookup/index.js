require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT;
// Crie uma nova API utilizando o express
// A aplicação deve ser um pacote Node.js
// Dê ao pacote o nome de cep-lookup
// Utilize o express para gerenciar os endpoints da sua aplicação
// A aplicação deve ter a rota GET /ping , que retorna o status 200 OK e o seguinte JSON: { "message": "pong!" }
app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
