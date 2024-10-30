const surveyValidationSchema = require('../validation/surveyValidation');

const validateSurvey = (req, res, next) => {
    const { error, value } = surveyValidationSchema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid survey data',
            details: error.details.map(err => err.message)
        });
    }
    
    req.validatedData = value; // Save validated data in request object
    next();
};

module.exports = validateSurvey;
