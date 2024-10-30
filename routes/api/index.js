const express = require('express');
const router = express.Router();

const authenticateToken = require('../../config/authentication');


const auth = require('./auth');
const survey = require('./survey');
const message = require('./message');

router.use('/auth', auth);
router.use('/survey', authenticateToken, survey);
router.use('/message', message);

module.exports = router;