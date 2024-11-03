const router = require("express").Router();
const authController = require("./controllers/authController");
const courseController = require("./controllers/courseController");
const commentController = require("./controllers/commentController");
const reviewController = require("./controllers/reviewController");
const wishlistController = require("./controllers/wishlistController");
const blogController = require("./controllers/blogController");

router.use("/auth", authController);
router.use("/courses", courseController);
router.use("/comments", commentController);
router.use("/reviews", reviewController);
router.use("/wishlist", wishlistController);
router.use("/blog", blogController);

module.exports = router;