const authenticateToken = require("../middlewares/authMiddleware");
const router = require("express").Router();
const Course = require("../schemas/courseSchema");
const User = require("../schemas/authSchema");
const Review = require("../schemas/reviewSchema");
const { getErrorMessage } = require("../utils/errorParser");


router.post("/create", authenticateToken, async (req, res) => {
    const { reviewData, courseId, userId } = req.body;
    if(!reviewData || !courseId || !userId){
        return res.status(400).json({ message: "Review data, course ID and user ID are required." });
    }
    try{
        const review = new Review({
            ...reviewData,
            course: courseId,
            user: userId,
            creator: req.user.firstName + " " + req.user.lastName
        })
        const savedReview = await review.save();
        if(!savedReview){
            return res.status(400).json({ message: "Error saving the review" });
        } 
        const course = Course.findById(courseId);
        const user = User.findById(userId);
        const [foundCourse, foundUser] = await Promise.all([course, user]);
        if(!foundCourse){
            return res.status(400).json({ message: "Course not found" });
        }
        if(!foundUser){
            return res.status(400).json({ message: "User not found" });
        }

        foundUser.reviews.push(savedReview._id);
        foundCourse.reviews.push(savedReview._id);
        await Promise.all([foundUser.save(), foundCourse.save()]);
        return res.status(201).json({ message: "Review created successfully", review: savedReview });
 
    }catch(error){
        console.error("Error in create review function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
});

router.get("/personal/:userId", authenticateToken, async (req, res) => {
    const userId = req.params.userId;
    if(!userId){
        return res.status(400).json({ message: "User ID is required." });
    }
    try{
        const user = await User.findById(userId).populate({
            path: 'reviews',
            populate: { 
                path: 'course', 
                select: ["courseTitle", "reviews"]
            }
        });

        if(!user){
            return res.status(400).json({ message: "User not found" });
        }
        return res.status(200).json(user.reviews);
        
    }catch(error){
        console.error("Error in get personal reviews function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
});

router.delete("/delete/:reviewId", authenticateToken, async (req, res) => {
    const reviewId = req.params.reviewId;
    if (!reviewId) {
        return res.status(400).json({ message: "Review ID is required." });
    }
    try {
        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        const course = await Course.findById(review.course);
        const user = await User.findById(review.user);
        if (!course || !user) {
            return res.status(400).json({ message: "Course or user not found!" });
        }

        course.reviews = course.reviews.filter(item => item.toString() !== reviewId);
        user.reviews = user.reviews.filter(item => item.toString() !== reviewId);
        await Promise.all([course.save(), user.save(), review.deleteOne()]);
        return res.status(200).json({ message: "Review deleted successfully" });
        // await Promise.all([course.save(), user.save(), review.delete()]);

        // return res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        console.error("Error in delete review function", error);
        const errorMessage = getErrorMessage(error);
        return res.status(500).json({ message: errorMessage });
    }
});

  


module.exports = router;