const rescue = require('express-rescue');
const { isValid, createUser } = require('../models/userModel');

module.exports = [
  (req, res, next) => {
    const { error } = isValid(req.body);
    if (error) return next(error);
    next();
  },

  rescue(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const newUser = {
      firstName, lastName, email, password
    };

    createUser(newUser);
    res.status(201).json(newUser);
  }),
];
