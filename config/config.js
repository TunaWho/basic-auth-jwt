module.exports = {
  port: process.env.APP_PORT || 3000,
  db: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'nodejs-auth',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
  },
  session: {
    secret: process.env.SESSION_SECRET || "my_secret_key",
    cookie: { maxAge: 60000 },
  },
  jwt: {
    secretToken: process.env.SECRET_TOKEN || 'secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h'
  }
};
