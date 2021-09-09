const rescue = require('express-rescue');
const { isValid, updateUser } = require('../models/userModel');

module.exports = [
  (req, _res, next) => {
    const { error } = isValid(req.body);
    if (error) return next(error);
    next();
  },

  rescue(async (req, res) => {
    const update = await updateUser(req);

    if (!update) {
      return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
    }

    res.status(200).json(update);
  }),
];
