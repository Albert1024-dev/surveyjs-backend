const express = require('express');
const router = express.Router();

const validateSurvey = require('../../middleware/validateSurvey');

const surveyController = require('../../controllers/surveyController');
router.post('/', validateSurvey, surveyController.create);
router.get('/', surveyController.get);
router.get('/:userId', surveyController.getByUser);

module.exports = router;