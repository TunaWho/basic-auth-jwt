const response = require('../config/response');

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || response.HTTP_INTERNAL_SERVER_ERROR;
  const message = err.message || 'Internal server error';

  res.status(statusCode).json({ message });
}

module.exports = errorHandler;
