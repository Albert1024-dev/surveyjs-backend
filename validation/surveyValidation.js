const Joi = require('joi');

const surveyValidationSchema = Joi.object({
    userId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required() // Checks for a valid MongoDB ObjectId string
    //ipAddress: Joi.string().ip({ version: ['ipv4', 'ipv6'] }).required(),
});

module.exports = surveyValidationSchema;
