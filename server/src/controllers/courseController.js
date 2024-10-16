const authenticateToken = require("../middlewares/authMiddleware");
const Course = require("../schemas/courseSchema");
const User = require("../schemas/authSchema");
const { getErrorMessage } = require("../utils/errorParser");

const router = require("express").Router();

router.post("/create", authenticateToken,async (req, res) => {
    // console.log("create course");
    const { courseData, userId } = req.body;
    // console.log(courseData);
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
        const createdCourses = await User.findById(userId).populate({
            path: 'createdCourses',
            populate: {
                path: 'reviews'
            }
        });;
        return res.status(200).json({ createdCourses: createdCourses.createdCourses });

    } catch(error) {
        console.error("Error in get created courses function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
});

router.get("/:courseId", async (req, res) => {
    const { courseId } = req.params;

    if(!courseId){
        return res.status(400).json({ message: "Course ID is required." });
    }
    //TODO: populate reviews and comments
    const course = await Course.findById(courseId)
    .populate("instructor")
    .populate("comments")
    .populate("reviews");

    // console.log(course);

    if(!course){
        return res.status(404).json({ message: "Course not found." });
    }
    return res.status(200).json({ course });
});

router.get("/", async (req, res) => {
    try{
        const limit = parseInt(req.query.limit) || 0;
        
        const courses = await Course.find().populate("instructor").populate("reviews").limit(limit);
         
        return res.status(200).json(courses);

    }catch(error){
        console.error("Error in get all courses function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
});

router.delete("/:courseId", authenticateToken, async (req, res) => {
    const { courseId } = req.params;
    const userId = req.user._id;

    if(!courseId){
        return res.status(400).json({ message: "Course ID is required." });
    }
    try {
        const course = await Course.findById(courseId);
        console.log(course);
        const instructorId = course.instructor;
        if(instructorId.toString() !== userId.toString()){
            return res.status(403).json({ message: "You are not authorized to delete this course." });
        }
        const deletedCourse = await Course.findByIdAndDelete(courseId);
        const user = await User.findById(userId);
        user.createdCourses = user.createdCourses.filter(course => course.toString() !== courseId);
        await user.save();

        return res.status(200).json({ message: "Course deleted successfully." });


        
    } catch (error) {
        console.error("Error in delete course function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
        
    }
});
module.exports = router;