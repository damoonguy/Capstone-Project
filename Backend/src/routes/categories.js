const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");



/**
 * Create new category
 * POST /api/categories
 */
router.post("/", (req, res) => {
    categoriesController.createCategory(req, res);

});

/**
 * Get all categories
 * GET /api/categories
 */
router.get("/", (req, res) => {
    categoriesController.getCategories(req, res);

});

/**
 * Get category by id
 * GET /api/categories/:id
 */
router.get("/:id", (req, res) => {
    categoriesController.getCategoryById(req, res);

});

/**
 * Update category by id
 * PUT /api/categories/:id
 */
router.put("/:id", (req, res) => {
    categoriesController.updateCategory(req, res);
});


/**
 * Delete category by id
 * DELETE /api/categories/:id
 */
router.delete("/:id", (req, res) => {
    categoriesController.deleteCategory(req.params.id);
});

module.exports = router;