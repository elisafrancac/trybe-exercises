const rescue = require('express-rescue');
const { getUser } = require('../models/userModel');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);

  if (!user) return res.status(404).json({ 
    error: true,
    message: "Usuário não encontrado" 
  });

  res.status(200).json(user);
});