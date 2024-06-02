const Category = require("../models/Category");
const Blog = require("../models/Blog");

const createCategory = async (req, res) => {
  console.log(req.body);

  try {
    const category = new Category({
      title: req.body.title,
      description: req.body.description,
      color: req.body.color,
    });
    const newCategory = await category.save();
    const categoryRes = await Category.findById(newCategory._id);
    return res.status(201).json({ message: "New category created!", data: categoryRes });
  } catch (error) {
    return res.status(500).json({ message: error.message, data: [] });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ message: "Return all categories!", data: categories });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "wanker", data: [] });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      return res.status(200).json({ message: "Return category by ID!", data: category });
    } else {
      return res.status(404).json({ message: "category not found!", data: [] });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, data: [] });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      category.title = req.body.title || category.title;
      category.description = req.body.description || category.description;
      category.color = req.body.color || category.color;
      const updatedCategory = await category.save();
      return res.status(200).json({ message: "Category updated!", data: updatedCategory});
    } else {
      return res.status(404).json({ message: "Category not found!", data: [] });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, data: [] });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryDB = await Category.findById(req.params.id);
    if (!categoryDB) {
      return res.status(404).json({message: "category not found!", data: []});
    }
    const blogs =  await Blog.find();
    const blogsUsingCat = blogs.map(blog => blog.categoryIds.find(x => x.toString() === req.params.id ? true : false));
    if (blogsUsingCat.find(x => x !== undefined ? true : false)) {
      return res.status(400).json({ message: "Can't delete category with existing blogs!" });
    } 
    const category = await Category.findByIdAndDelete(req.params.id);
    if (category) {
      return res.status(200).json({ message: "category deleted!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
