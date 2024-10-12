const authenticateToken = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/create", authenticateToken,async (req,res) => {
    const { comment, courseId, userId } = req.body;
    console.log(req.body);
})


module.exports = router;