const router = require("express").Router();
const authController = require("./controllers/authController");
const courseController = require("./controllers/courseController");

router.use("/auth",authController);
router.use("/courses",courseController);

module.exports = router;