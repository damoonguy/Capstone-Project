const express = require("express");
const router = express.Router();
exports.router = router;
const categoriesController = require("../controllers/categories");

const {protect} = require("../middleware/auth");


/**
 * Create new category
 * POST /api/categories
 */
router.post("/", protect, (req, res) => {
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
 * UPDATE /api/categories/:id
 */
router.put("/:id", protect, (req, res) => {
    categoriesController.updateCategory(req, res);
});

/**
 * Delete category by id
 * DELETE /api/categories/:id
 */
router.delete("/:id", protect, (req, res) => {
    categoriesController.deleteCategory(req, res);
});

module.exports = router;