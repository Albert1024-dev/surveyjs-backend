const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // Get token from the request headers
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Access token is missing or invalid' });
    }

    // Verify the token
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token is invalid or expired' });
        }
        req.user = user; // Store user information for further use
        next();
    });
};

module.exports = authenticateToken;