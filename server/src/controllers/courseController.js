const authenticateToken = require("../middlewares/authMiddleware");
const Course = require("../schemas/courseSchema");
const User = require("../schemas/authSchema");
const { getErrorMessage } = require("../utils/errorParser");

const router = require("express").Router();

router.post("/create", authenticateToken,async (req, res) => {
    console.log("create course");
    const { courseData, userId } = req.body;
    console.log(courseData);
    if (!courseData || !userId) {
        return res.status(400).json({ message: "Course data and user ID are required." });
    }

    try{
        const newCourse = new Course({
            ...courseData,
            instructor: userId,
            creator: req.user.fistName + " " + req.user.lastName
        });
        const savedCourse = await newCourse.save();
        
        if(savedCourse){
            const user = await User.findById(userId);
            user.createdCourses.push(savedCourse._id);
            await user.save();

        }
        return res.status(201).json({ message: "Course created successfully.", course: savedCourse });

    }catch(error){
        console.error("Error in create course function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }

});

router.get("/created/:userId", authenticateToken, async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: "User ID is required." });
    }
    try{
        const createdCourses = await User.findById(userId).populate("createdCourses");
        console.log(createdCourses);
        return res.status(200).json({ createdCourses: createdCourses.createdCourses });

    } catch(error) {
        console.error("Error in get created courses function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
});
module.exports = router;