const jwt = require('jsonwebtoken');
const config = require('../config/config');

const createToken = (id) => {
  return jwt.sign({ id }, config.jwt.secretToken, {
    expiresIn: config.jwt.expiresIn,
  });
};

const verify = (token) => {
  return jwt.verify(token, config.jwt.secretToken);
};

module.exports = {
  createToken,
  verify,
};
