const router = require("express").Router();
const authController = require("./controllers/authController");
const courseController = require("./controllers/courseController");
const commentController = require("./controllers/commentController");

router.use("/auth",authController);
router.use("/courses",courseController);
router.use("/comments",commentController);

module.exports = router;