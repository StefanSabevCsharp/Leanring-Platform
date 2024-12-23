const authenticateToken = require("../middlewares/authMiddleware");
const Course = require("../schemas/courseSchema");
const User = require("../schemas/authSchema");
const Review = require("../schemas/reviewSchema");
const Comment = require("../schemas/commentSchema");
const { getErrorMessage } = require("../utils/errorParser");
const mongoose = require("mongoose");

const router = require("express").Router();

router.post("/create", authenticateToken, async (req, res) => {

    const { courseData, userId } = req.body;

    if (!courseData || !userId) {
        return res.status(400).json({ message: "Course data and user ID are required." });
    }

    try {
        const newCourse = new Course({
            ...courseData,
            instructor: userId,
            creator: req.user.firstName + " " + req.user.lastName,
            enrolledStudents: 0,
        });
        const savedCourse = await newCourse.save();

        if (savedCourse) {
            const user = await User.findById(userId);
            user.createdCourses.push(savedCourse._id);
            await user.save();

        }
        return res.status(201).json({ message: "Course created successfully.", course: savedCourse });

    } catch (error) {
        console.error("Error in create course function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }

});

router.get("/created/:userId", async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: "User ID is required." });
    }
    try {
        const createdCourses = await User.findById(userId).populate({
            path: 'createdCourses',
            populate: {
                path: 'reviews'
            }
        });;
        return res.status(200).json({ createdCourses: createdCourses.createdCourses });

    } catch (error) {
        console.error("Error in get created courses function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
});

router.get("/:courseId", async (req, res) => {
    const { courseId } = req.params;

    if (!courseId) {
        return res.status(400).json({ message: "Course ID is required." });
    }

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
        return res.status(400).json({ message: "Invalid Course ID format." });
    }

    const course = await Course.findById(courseId)
        .populate("instructor")
        .populate("comments")
        .populate("reviews");


    if (!course) {
        return res.status(404).json({ message: "Course not found." });
    }
    return res.status(200).json({ course });
});

router.get("/", async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 0;
        const category = req.query.category;
        const query = category && category !== "all" ? { category } : {};

        const courses = await Course.find(query).populate("instructor").populate("reviews").limit(limit);

        return res.status(200).json(courses);

    } catch (error) {
        console.error("Error in get all courses function", error);
        const errorMessage = getErrorMessage(error);
        res.status(500).json({ message: errorMessage });
    }
});

router.delete("/:courseId", authenticateToken, async (req, res) => {
    const { courseId } = req.params;
    const userId = req.user._id;

    if (!courseId) {
        return res.status(400).json({ message: "Course ID is required." });
    }

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found." });
        }

        const instructorId = course.instructor;
        if (instructorId.toString() !== userId.toString()) {
            return res.status(403).json({ message: "You are not authorized to delete this course." });
        }
        const comments = await Comment.find({ course: courseId });
        const commentDeletionPromises = comments.map(async (comment) => {
            try {
                const commentUser = await User.findById(comment.user);
                if (commentUser) {
                    commentUser.comments = commentUser.comments.filter(cId => cId.toString() !== comment._id.toString());
                    await commentUser.save();
                }
                await Comment.findByIdAndDelete(comment._id);
            } catch (commentError) {
                console.error(`Error deleting comment with id ${comment._id}`, commentError);

            }
        });

        const reviews = await Review.find({ course: courseId });
        const reviewDeletionPromises = reviews.map(async (review) => {
            try {
                const reviewUser = await User.findById(review.user);
                if (reviewUser) {
                    reviewUser.reviews = reviewUser.reviews.filter(rId => rId.toString() !== review._id.toString());
                    await reviewUser.save();
                }
                await Review.findByIdAndDelete(review._id);
            } catch (reviewError) {
                console.error(`Error deleting review with id ${review._id}`, reviewError);
            }
        });

        await Promise.all([...commentDeletionPromises, ...reviewDeletionPromises]);

        await Course.findByIdAndDelete(courseId);

        const user = await User.findById(userId);
        user.createdCourses = user.createdCourses.filter(cId => cId.toString() !== courseId);
        await user.save();

        return res.status(200).json({ message: "Course and related data deleted successfully." });

    } catch (error) {
        console.error("Error in delete course function", error);
        return res.status(500).json({ message: "An error occurred while deleting the course." });
    }
});
router.put("/:courseId", authenticateToken, async (req, res) => {
    const { courseData, userId } = req.body;
    const { courseId } = req.params;
    if(!courseData || !userId || !courseId){
        return res.status(400).json({ message: "Course data, course ID and user ID are required." });
    }
    const currentUserID = req.user._id;
    if(currentUserID.toString() !== userId.toString()){
        return res.status(403).json({ message: "You are not authorized to update this course." });
    }

    try{
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({ message: "Course not found." });
        }
        const updatedCourse = await Course.findByIdAndUpdate(courseId, { $set: courseData }, { new: true });

        return res.status(200).json({ message: "Course updated successfully.", course: updatedCourse });
    }catch(error){
        console.error("Error in update course function", error);
        const errorMessage = getErrorMessage(error);
        return res.status(500).json({ message: errorMessage });
    }
});

router.post("/subscribe", authenticateToken, async (req, res) => {
    const { courseId, userId } = req.body;

    if (!courseId || !userId) {
        return res.status(400).json({ message: "Course ID and user ID are required." });
    }


    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found." });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        if (user.courses.includes(courseId)) {
            return res.status(400).json({ message: "User is already subscribed to this course." });
        }

        user.courses.push(courseId);
        course.enrolledStudents += 1;
        const instructor = await User.findById(course.instructor);
        if (instructor) {
            instructor.signedUpStudents.push(userId);

        }
        await Promise.all([user.save(), instructor.save(), course.save()]);

        return res.status(200).json({ message: "Subscribed to course successfully.", course });

    } catch (error) {
        console.error("Error in subscribe to course function", error);
        const errorMessage = getErrorMessage(error);
        return res.status(500).json({ message: errorMessage });
    }
});


router.post("/unsubscribe", authenticateToken, async (req, res) => {
    const { courseId, userId } = req.body;

    if (!courseId || !userId) {
        return res.status(400).json({ message: "Course ID and user ID are required." });
    }

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found." });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        if (!user.courses.includes(courseId)) {
            return res.status(400).json({ message: "User is not subscribed to this course." });
        }

        user.courses = user.courses.filter(id => id.toString() !== courseId);
        course.enrolledStudents -= 1;

        const instructor = await User.findById(course.instructor);
        if (instructor) {
            instructor.signedUpStudents = instructor.signedUpStudents.filter(id => id.toString() !== userId);
        }

        await Promise.all([user.save(), instructor.save(), course.save()]);
        return res.status(200).json({ message: "Unsubscribed from course successfully." });

    } catch (error) {
        console.error("Error in unsubscribe from course function", error);
        const errorMessage = getErrorMessage(error);
        return res.status(500).json({ message: errorMessage });
    }
});

module.exports = router;