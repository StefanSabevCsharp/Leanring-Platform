const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../schemas/authSchema");
const { getErrorMessage } = require("../utils/errorParser");

router.post("/register", async (req, res) => {
    console.log(req.body);
    const { firstName, lastName, username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json("User already exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            password: hash
        });

        const savedUser = await newUser.save();
        const payload = {
            id: savedUser._id,
            email: savedUser.email,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "72h" });
        console.log("Setting cookie with token:", token);
        res.cookie("authToken", token, {
            httpOnly: true,
            path: "/",
        });

        console.log(`savedUser: ${savedUser}`);

        res.status(201).json(savedUser);
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.status(400).json({ message: errorMessage });
    }
});

module.exports = router;
