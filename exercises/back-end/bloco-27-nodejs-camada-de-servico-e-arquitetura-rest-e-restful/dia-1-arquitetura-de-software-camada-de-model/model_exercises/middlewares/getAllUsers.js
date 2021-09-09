const rescue = require('express-rescue');
const { getUsers } = require('../models/userModel');

module.exports = rescue(async (_req, res) => {
  const users = await getUsers();
  res.status(200).json(users);
});
