const Survey = require('../models/Survey');
const User = require('../models/User');
const fetch = require('node-fetch');


exports.create = async (req, res) => {
    const userData = new Survey(req.validatedData);

    const user = await User.findById(userData.userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const surveyData = JSON.parse(req.body.talkingResult);
    
    const locationData = await getLocationFromIP(req.ip);

    let totalScore = 0;
    let scores = {
        "A": 0,
        "B": 0,
        "C": 0
    };
    
    for (let i = 1; i <= 7; i++) { // Adjust according to your number of questions
        const firstChoice = surveyData[`question${i}`];
        const secondChoice = surveyData[`question${i}_second`];

        if (firstChoice) {
            totalScore += 2; // Add 2 points for the first choice
            scores[firstChoice] += 2;
        }

        if (secondChoice && secondChoice !== firstChoice) {
            totalScore += 1; // Add 1 point for the second choice
            scores[secondChoice] += 1;
        }
    }

    const percentages = {
        "A": ((scores["A"] / totalScore) * 100) || 0,
        "B": ((scores["B"] / totalScore) * 100) || 0,
        "C": ((scores["C"] / totalScore) * 100) || 0,
    };

    // Convert percentages object to an array of [key, value] pairs
    const entries = Object.entries(percentages);

    // Sort entries by value in descending order
    entries.sort(([, valueA], [, valueB]) => valueB - valueA);

    // Get the keys of the two highest values
    const topTwoKeys = entries.slice(0, 2).map(([key]) => key);

    // Sum the keys (assuming they are numeric)
    const sumOfTopTwoKeys = topTwoKeys.join('');

    const newSurvey = new Survey({
        userId: userData.userId,
        ipAddress: req.ip,
        talkingResult: surveyData,
        location: locationData,
        totalResult: sumOfTopTwoKeys
    });

    newSurvey.save()
        .then(() => {
            res.status(201).json({ message: "Survey created successfully" });
        })
        .catch((err) => {
            res.status(500).json({ message: "Error creating survey", error: err });
        });
}

// GET route to fetch all survey entries with populated user information
exports.get = async (req, res) => {
    try {
        const surveys = await Survey.find().populate('userId', 'email firstName lastName'); // Populates userId with specific fields
        res.status(200).json(surveys);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// GET route to fetch survey entries by userId with populated user information
exports.getByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const surveys = await Survey.find({ userId }).populate('userId', 'email firstName lastName');
        
        if (!surveys.length) {
            return res.status(404).json({ message: 'No surveys found for this user' });
        }

        res.status(200).json(surveys);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

async function getLocationFromIP(ipAddress) {
    try {
        const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        if (!response.ok) throw new Error('Failed to fetch location data');
        
        const data = await response.json();
        return {
            country: data.country_name,
            region: data.region,
            city: data.city,
            lat: data.latitude,
            lng: data.longitude
        };
    } catch (error) {
        console.error("Error fetching location data:", error);
        return null;
    }
};

function getRoundedPercentage(AP, BP, CP) {
    let total = AP + BP + CP;
    if (total === 0) return { AP: 0, BP: 0, CP: 0 }; // Handle division by zero
    let rawAP = (AP / total) * 100;
    let rawBP = (BP / total) * 100;
    let rawCP = (CP / total) * 100;

    // Round down each percentage
    let roundedAP = Math.floor(rawAP);
    let roundedBP = Math.floor(rawBP);
    let roundedCP = Math.floor(rawCP);
    let roundedTotal = roundedAP + roundedBP + roundedCP;

    // Adjust percentages to ensure they sum to 100%
    let difference = 100 - roundedTotal;
    let roundedPercentages = { AP: roundedAP, BP: roundedBP, CP: roundedCP };

    if (difference > 0) {
        let remainders = [
            { value: rawAP - roundedAP, name: 'AP' },
            { value: rawBP - roundedBP, name: 'BP' },
            { value: rawCP - roundedCP, name: 'CP' },
        ];
        remainders.sort((a, b) => b.value - a.value);
        for (let i = 0; i < difference; i++) {
            roundedPercentages[remainders[i % 3].name]++;
        }
    }
    return roundedPercentages;
};

function getTop2Scores(roundedPercentages) {
    const scores = [
        { name: 'A', value: roundedPercentages.AP },
        { name: 'B', value: roundedPercentages.BP },
        { name: 'C', value: roundedPercentages.CP }
    ];

    // Sort the scores in descending order
    scores.sort((a, b) => b.value - a.value);

    // Get the top 2 scores
    const top2 = scores.slice(0, 2);

    // Combine the names of the top 2 scores
    // const combination = top2.map(score => score.name).join('');

    return top2[0].name + top2[1].name;
}