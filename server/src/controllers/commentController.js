const authenticateToken = require("../middlewares/authMiddleware");
const router = require("express").Router();
const Comment = require("../schemas/commentSchema");
const User = require("../schemas/authSchema");
const Course = require("../schemas/courseSchema");
const { getErrorMessage } = require("../utils/errorParser");

router.post("/create", authenticateToken,async (req,res) => {
    const { text, courseId, userId } = req.body;
    console.log(text, courseId, userId);
    if(!text || !courseId || !userId){
        return res.status(400).json({ message: "Text, course ID and user ID are required." });
    }
    try{
        const newComment = new Comment({
            text: text,
            course: courseId,
            user: userId,
            creator: req.user.firstName + " " + req.user.lastName
        });
        const savedComment = await newComment.save();
        if(savedComment){
            const course = await Course.findById(courseId);
            course.comments.push(savedComment._id);
            await course.save();
            const user = await User.findById(userId);
            user.comments.push(savedComment._id);
            await user.save();
        }
        return res.status(201).json({ message: "Comment created successfully.", comment: savedComment });

    }catch(error){
        console.error("Error in create comment function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
})


module.exports = router;