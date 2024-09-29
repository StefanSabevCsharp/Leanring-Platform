const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../schemas/authSchema");
const { getErrorMessage } = require("../utils/errorParser");
const authenticateToken = require("../middlewares/authMiddleware");
const { removePasswordUtil } = require("../utils/removePassword");

router.post("/register", async (req, res) => {
    console.log(req.body);
    const { firstName, lastName, userName, email, password } = req.body;

    try {

        // const existingUser = await User.findOne({ email: email  });
        const existingUser = await User.findOne({
            $or: [
                { email: email },
                { userName: userName }
            ]
        });

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            userName,
            email,
            password: hash,
            role: "student",
        });

        const savedUser = await newUser.save();
        const payload = {
            _id: savedUser._id,
            email: savedUser.email,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            userName: savedUser.userName,
            createdAt: savedUser.createdAt,
            role: savedUser.role,
        }
        // const { password, ...payload } = savedUser._doc;
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "72h" });
        console.log("Setting cookie with token:", token);
        res.cookie("authToken", token, {
            httpOnly: true,
            path: "/",
        });

        console.log(`savedUser: ${savedUser}`);
        res.status(201).json(removePasswordUtil(savedUser));

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.status(400).json({ message: errorMessage });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log("Login request received with email:", email, "and password ", password);
    try {
        const searchedUser = await User.findOne({ email: email });
        if (!searchedUser) {
            return res.status(400).json("User not found");
        }
        // const isPasswordValid = bcrypt.compareSync(password, searchedUser.password);
        const isPasswordValid = await bcrypt.compare(password, searchedUser.password);
        console.log(`isPasswordValid: ${isPasswordValid}`);
        if (!isPasswordValid) {
            return res.status(400).json("Invalid password");
        }
        const payload = {
            _id: searchedUser._id,
            email: searchedUser.email,
            firstName: searchedUser.firstName,
            lastName: searchedUser.lastName,
            userName: searchedUser.userName,
            createdAt: searchedUser.createdAt,
            role: searchedUser.role,
        }
        // const { password, ...payload } = searchedUser._doc;
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "72h" });


        res.cookie("authToken", token, {
            httpOnly: true,
            path: "/",
        });

        console.log(`searched user: ${searchedUser}`);

        res.status(200).json(removePasswordUtil(searchedUser));

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.status(400).json({ message: errorMessage });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("authToken");
    res.status(200).json({ message: "Logged out successfully" });
})

router.put("/updateProfile", authenticateToken, async (req, res) => {

    const userIdFromToken = req.user._id;

    const { firstName, lastName, userName, email, phoneNumber, bio } = req.body;

    try {
        const currentUser = await User.findById(userIdFromToken);
        

        // Check if the username or email is actually changing
        const usernameChanged = userName !== currentUser.userName;
        const emailChanged = email !== currentUser.email;

        if (usernameChanged) {
            const existingUsername = await User.findOne({ userName: userName });
            if (existingUsername && existingUsername._id.toString() !== userIdFromToken) {
                return res.status(400).json({ message: "Username already exists" });
            }
        }

        if (emailChanged) {
            const existingEmail = await User.findOne({ email: email });
            if (existingEmail && existingEmail._id.toString() !== userIdFromToken) {
                return res.status(400).json({ message: "Email already exists" });
            }
        }


        const updatedUser = await User.findByIdAndUpdate(userIdFromToken, {
            firstName,
            lastName,
            userName,
            email,
            phoneNumber,
            bio,
        }, { new: true });

        const payload = {
            _id: updatedUser._id,
            email: updatedUser.email,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            userName: updatedUser.userName,
            phoneNumber: updatedUser.phoneNumber,
            createdAt: updatedUser.createdAt,
            bio: updatedUser.bio,
        };
        console.log(`updatedUser: ${updatedUser}`);

        const newToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '72h' });

        res.cookie("authToken", newToken, {
            httpOnly: true,
            path: "/",
        });
        res.status(200).json(removePasswordUtil(updatedUser));

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.status(400).json({ message: errorMessage });
    }
});


router.get("/checkAuth", authenticateToken, (req, res) => {
    try {
        const user = req.user;
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
