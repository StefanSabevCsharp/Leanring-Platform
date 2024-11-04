const router = require("express").Router();
const Blog = require("../schemas/blogSchema");
const User = require("../schemas/authSchema");
const authenticateToken = require("../middlewares/authMiddleware");

router.post("/create", authenticateToken, async (req, res) => {
    const { values, userId } = req.body;
    const { title, heading, mainImageUrl, secondImageUrl, firstPartParagraph, secondPartParagraph, thirdPartParagraph, fourthPartParagraph, fifthPartParagraph, sixthPartParagraph, additionalText } = values;

    if (!userId || !title || !heading || !mainImageUrl || !firstPartParagraph) {
        return res.status(400).json({ message: "All required fields must be filled" });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const blog = new Blog({
            title,
            heading,
            mainImageUrl,
            secondImageUrl,
            firstPartParagraph,
            secondPartParagraph,
            thirdPartParagraph,
            fourthPartParagraph,
            fifthPartParagraph,
            sixthPartParagraph,
            additionalText,
            creator: `${user.firstName} ${user.lastName}`,
        });

        const savedBlog = await blog.save();
        if (savedBlog) {
            user.blogs.push(savedBlog._id);
            await user.save();
        }
        return res.status(201).json({ message: "Blog created successfully.", blog: savedBlog });
    } catch (error) {
        console.error("Error in create blog function", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/:blogId", async (req, res) => {
    const { blogId } = req.params;
    try {
        const blog = await Blog.findById(blogId).populate("comments");
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(200).json(blog);
    } catch (error) {
        console.error("Error in get blog details function", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/", async (req, res) => {
    const limit = parseInt(req.query.limit) || 0;
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 }).limit(limit);
        return res.status(200).json({ blogs });
    } catch (error) {
        console.error("Error in get blogs function", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
