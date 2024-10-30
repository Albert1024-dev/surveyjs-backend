const express = require('express');
const router = express.Router();
const authenticateToken = require('../../config/authentication');

const authController = require('../../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authenticateToken, authController.logout);

module.exports = router;