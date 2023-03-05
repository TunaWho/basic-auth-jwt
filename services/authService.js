const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils/jwt');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Invalid email or password');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid email or password');

  const token = createToken(user.id);
  return token;
};

const register = async (credentials) => {
  const existingUser = await User.findOne({
    where: { email: credentials.email },
  });
  if (existingUser) throw new Error('Email already exists');

  const user = await User.create({
    email: credentials.email,
    name: credentials.username,
    password: credentials.password,
  });
  return user;
};

module.exports = {
  login,
  register,
};
