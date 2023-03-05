require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/database');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/web');
const response = require('./config/response');


// Connect to database
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('combined'));

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(response.HTTP_INTERNAL_SERVER_ERROR)
    .json({ message: 'Something went wrong' });
});

module.exports = app;
