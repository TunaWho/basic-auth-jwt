const response = require('../config/response');
const { verify } = require('../utils/jwt');

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res
      .status(response.HTTP_FORBIDDEN)
      .json({ message: 'No token provided' });
  }

  try {
    const hasVerified = verify(token);
    req.user = hasVerified.user;
    next();
  } catch (err) {
    res.status(response.HTTP_UNAUTHORIZED).json({ message: 'Invalid token' });
  }
}

module.exports = authenticate;
