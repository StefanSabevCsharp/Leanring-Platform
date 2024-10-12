const router = require("express").Router();
const authController = require("./controllers/authController");
const courseController = require("./controllers/courseController");
const commentController = require("./controllers/commentController");
const reviewController = require("./controllers/reviewController");

router.use("/auth", authController);
router.use("/courses", courseController);
router.use("/comments", commentController);
router.use("/reviews", reviewController);

module.exports = router;