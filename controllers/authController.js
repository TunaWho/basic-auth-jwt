const authService = require('../services/authService');
const response = require('../config/response');

async function register(req, res, next) {
  const userData = req.body;
  try {
    const data = await authService.register(userData);
    res.status(response.HTTP_CREATED).json({ data });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;
  try {
    const token = await authService.login(email, password);
    res.status(response.HTTP_OK).json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
};
