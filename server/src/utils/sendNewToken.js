const jwt = require("jsonwebtoken");

const createNewToken = (user) => {

    const payload = {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        phoneNumber: user.phoneNumber,
        createdAt: user.createdAt,
        bio: user.bio,
        role: user.role,
    };
    const newToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '72h' });

    return newToken;
}

module.exports = { createNewToken };