const jwt = require("jsonwebtoken");

const createNewToken = (user) => {

    const payload = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        role: user.role,
        phoneNumber: user.phoneNumber,
        bio: user.bio,
        createdAt: user.createdAt,
        // courses: user.courses,
        // wishlist: user.wishlist,
        // createdCourses: user.createdCourses,
        // soldCourses: user.soldCourses,
        // totalEarnings: user.totalEarnings,
        // reviews: user.reviews,
        // comments: user.comments,
        // signedUpStudents: user.signedUpStudents,

    };
    const newToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '72h' });

    return newToken;
}

module.exports = { createNewToken };