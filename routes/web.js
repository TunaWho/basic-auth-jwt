const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authenticate');
const errorHandler = require('../middleware/errorHandler');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected routes
router.use(authMiddleware);

// router.get('/users/:userId', userController.getUser);
// router.patch('/users/:userId', userController.updateUser);
// router.delete('/users/:userId', userController.deleteUser);

// Error handling middleware
router.use(errorHandler);

module.exports = router;
