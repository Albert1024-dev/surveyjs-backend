// This is sample code for survey in front-end using React.js and survey js.

import React, { useState } from 'react';
import * as Survey from 'survey-react-ui';
import 'survey-core/modern.min.css';
import axios from 'axios';

const SurveyComponent = ({ userId }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    // Define the survey structure
    const surveyJSON = {
        title: "Two-Step Choice Survey",
        pages: [
            {
                name: "page1",
                elements: Array.from({ length: 7 }, (_, i) => [
                    {
                        type: "radiogroup",
                        name: `question${i + 1}`,
                        title: `Question ${i + 1}: Choose one option.`,
                        choices: [
                            { value: "A", text: "Option A" },
                            { value: "B", text: "Option B" },
                            { value: "C", text: "Option C" }
                        ]
                    },
                    {
                        type: "radiogroup",
                        name: `question${i + 1}_second`,
                        title: `Question ${i + 1}: Choose one remaining option.`,
                        choices: [
                            { value: "A", text: "Option A" },
                            { value: "B", text: "Option B" },
                            { value: "C", text: "Option C" }
                        ],
                        visibleIf: `{question${i + 1}} notempty`,
                        choicesVisibleIf: `{question${i + 1}} != {item}`
                    }
                ]).flat()
            }
        ]
    };

    const surveyModel = new Survey.Model(surveyJSON);

    // Handle survey completion and send data to the backend
    const handleSurveyComplete = async (sender) => {
        const surveyData = sender.data;
        
        // Send data to the backend for score calculation
        try {
            await axios.post('http://localhost:5000/api/survey', {
                userId,
                talkingResult: surveyData
            });
            setIsCompleted(true);
        } catch (error) {
            console.error("Error submitting survey:", error);
            alert("There was an error submitting your survey.");
        }
    };

    surveyModel.onComplete.add(handleSurveyComplete);

    return (
        <div>
            {isCompleted ? (
                <h3>Thank you for completing the survey!</h3>
            ) : (
                <Survey.Survey model={surveyModel} />
            )}
        </div>
    );
};

export default SurveyComponent;
