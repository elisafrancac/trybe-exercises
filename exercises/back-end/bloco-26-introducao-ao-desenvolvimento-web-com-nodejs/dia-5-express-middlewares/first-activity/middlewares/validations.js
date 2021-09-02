const errorMessage = { message: 'Invalid data!'};
const errorMessage2 = { message: 'email or password is incorrect' }

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/;
  const keys = Object.keys(req.body);

  if (password.length <= 4 
    || password.length >= 9 
    || !password.match(passwordRegex)) {
      if (!keys.includes('username')) {
        return res.status(400).json(errorMessage2);
      }
      return res.status(400).json(errorMessage);
  }

  next();
};

const validateUsername = (req, res, next) => {
  const { username } = req.body;

  if (username.length <= 3) res.status(400).json(errorMessage);

  next();
};

const validateEmail = (req, res, next) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const keys = Object.keys(req.body);

  const { email } = req.body;

  if (!email.match(regex) 
    && keys.includes('username')) res.status(400).json(errorMessage);

  if (!email.match(regex)) res.status(400).json(errorMessage2);

  next();
};

module.exports = {
  validatePassword,
  validateEmail,
  validateUsername
};
