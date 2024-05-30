const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");


/**
 * Create new blog
 * POST /api/blogs/
 */
router.post("/", (req, res) => {
    blogController.createBlog(req, res);
});

/**
 * Get all blogs
 * GET /api/blogs/
 */
router.get("/", (req, res) => {
    blogController.getBlogs(req, res);
});

/**
 * get blogs by categoryId
 * GET /api/blogs/categories/:categoryId
 */
router.get("/category/:categoryId", (req, res) => {
    blogController.getBlogsByCategoryId(req, res);
});

/**
 * get blogs by author id
 * GET /api/blogs/author/:id
 */
router.get("/author/:id", (req, res) => {
    blogController.getBlogsByAuthorId(req, res);
});


/**
 * get blogs by blogId
 * GET /api/blogs/:id
 */
router.get("/:id", (req, res) => {
    blogController.getBlog(req, res);
});

/**
 * Update blog by blog id
 * PUT /api/blogs/
 */
router.put("/:id", (req, res) => {
    blogController.updateBlog(req, res);
});

/**
 * Delete blog by id
 * DELETE /api/blogs/
 */
router.delete("/:id", (req, res) => {
    blogController.deleteBlog(req, res);
});


module.exports = router;