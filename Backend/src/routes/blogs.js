const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");


/**
 * POST /api/blogs/
 */
router.post("/", (req, res) => {
    console.log(req.body);
    blogController.createBlog(req, res);
    res.send("post");
});

/**
 * GET /api/blogs/
 */
router.get("/", (req, res) => {
    blogController.getBlogs(req, res);
    res.send("blogs");
});

/**
 * get blogs by categoryId
 * GET /api/blogs/categories/:id
 */
router.get("/categories/:id", (req, res) => {
    blogController.getBlogsByCategoryId(req, res);
    res.send("Blogs by category id: " + req.params.id);
});

/**
 * get blogs by blogId
 * GET /api/blogs/:id
 */
router.get("/:id", (req, res) => {
    blogController.getBlogById(req, res);
    res.send("Blog by id: " + req.params.id);
});

/**
 * PUT /api/blogs/
 */
router.put("/:id", (req, res) => {
    blogController.updateBlogById(req, res);
    res.send("put: "+ req.params.id);
});

/**
 * Delete blog by id
 * DELETE /api/blogs/
 */
router.delete("/:id", (req, res) => {
    blogController.deleteBlogById(req, res);
    res.send("delete post: " + req.params.id);

});

module.exports = router;