const authenticateToken = require("../middlewares/authMiddleware");
const router = require("express").Router();
const Comment = require("../schemas/commentSchema");
const User = require("../schemas/authSchema");
const Course = require("../schemas/courseSchema");
const Blog = require("../schemas/blogSchema");
const { getErrorMessage } = require("../utils/errorParser");

router.post("/create", authenticateToken, async (req, res) => {
    const { text, entityId, userId, entityType } = req.body;
    console.log(text, entityId, userId, entityType);
    if (!text || !entityId || !userId || !entityType) {
        return res.status(400).json({ message: "Text, entityType, entity ID and user ID are required." });
    }
    try {
        const newComment = new Comment({
            text,
            user: userId,
            creator: req.user.firstName + " " + req.user.lastName,
        });

        const savedComment = await newComment.save();

        if (savedComment) {
            let entity;
            if (entityType === 'course') {
                entity = await Course.findById(entityId);
            } else if (entityType === 'blog') {
                entity = await Blog.findById(entityId);
            }

            if (entity) {
                entity.comments.push(savedComment._id);
                await entity.save();
            }

            const user = await User.findById(userId);
            if (user) {
                user.comments.push(savedComment._id);
                await user.save();
            }
            console.log("Comment created successfully.");
            console.log(savedComment);

            return res.status(201).json({ message: "Comment created successfully.", comment: savedComment });
        }

    } catch (error) {
        console.error("Error in create comment function", error);
        const errorMessage = getErrorMessage(error);
        return res.status(500).json({ message: errorMessage });
    }
})


module.exports = router;