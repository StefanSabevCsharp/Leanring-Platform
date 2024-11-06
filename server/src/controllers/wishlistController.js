const router = require("express").Router();
const authenticateToken = require("../middlewares/authMiddleware");
const User = require("../schemas/authSchema");
const { getErrorMessage } = require("../utils/errorParser");

router.post("/add", authenticateToken, async (req, res) => {
    const { courseId, userId } = req.body;
    if (!courseId || !userId) {
        return res.status(400).json({ message: "Course ID and User ID are required." });
    }
    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { wishlist: courseId } },
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        return res.status(200).json({ message: "Course added to wishlist successfully.", user });



    } catch (error) {
        console.error("Error in add course to wishlist function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
});

router.post("/remove", authenticateToken, async (req, res) => {
    const { courseId, userId } = req.body;
    if (!courseId || !userId) {
        return res.status(400).json({ message: "Course ID and User ID are required." });
    }
    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { $pull: { wishlist: courseId } },
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        return res.status(200).json({ message: "Course removed from wishlist successfully.", user });



    } catch (error) {
        console.error("Error in remove course from wishlist function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
});

router.get("/:userId", authenticateToken, async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: "User ID is required." });
    }
    try {
        const user = await User.findById(userId).populate("wishlist"); 
       return res.status(200).json(user.wishlist);
    } catch (error) {
        console.error("Error in get wishlist function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
});


module.exports = router;