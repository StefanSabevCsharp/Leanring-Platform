const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.cookies.authToken;

    if (!token) {
        return res.status(401).json({ message: "No token found" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) { 
            return res.status(403).json({ message: "Invalid token" });
        }

        req.user = user;  
        next();
    });
};

module.exports = authenticateToken;
