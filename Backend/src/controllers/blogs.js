const Blog = require("../models/Blog");

const createBlog = async (req, res) => {

  try {
    const blog = new Blog({
      author: req.body.author,
      categories: req.body.categories,
      readTime: req.body.readTime,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      content: req.body.content,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt
    });
    const newBlog = await blog.save();
    return res.status(201).json({ message: "New blog created!", data: newBlog });
  } catch (error) {
    return res.status(500).json({ message: error.message, data: [] });
  }
};

const getBlogs = async (req, res) => {


  try {
    const blogs = await Blog.find();
    return res.status(200).json({ message: "Return all blogs!", data: blogs });
  } catch (error) {
    return res.status(500).json({ message: error.message, data: [] });
  }
};

const getBlog = async (req, res) => {
  
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      return res.status(200).json({ message: "Return blog by ID!", data: blog });
    } else {
      return res.status(404).json({ message: "Blog not found!", data: [] });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, data: [] });
  }
};

const getBlogsByCategoryId = async (req, res) => {
  try {
    let blogs = await Blog.find();
    if (blogs) {
      const blogsByCategoryId = blogs.filter((x) => x.categories.find((y) => 
        y.id.toString() === req.params.categoryId ? x : false));
      return res.status(200).json({message: "Return blogs by category ID!", data: blogsByCategoryId});
    } else {
      return res.status(404).json({ message: "Blog not found!", data: [] });
    }
  } catch(error) {
    return res.status(500).json({ message: error.message, data: [] });
  }
};

const getBlogsByAuthorId = async (req, res) => {
  try {
    let blogs = await Blog.find();
    if (blogs) {
      const blogsByAuthor = blogs.filter((x) => x.authorId === req.params.id ? x : false);
      console.log(blogsByAuthor);
      return res.status(200).json({message: "Return blogs by author ID!", data: blogsByAuthor});
    } else {
      return res.status(404).json({ message: "Blog not found!", data: [] });
    }
  } catch(error) {
    return res.status(500).json({ message: error.message, data: [] });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      blog.author = req.body.author || blog.author;
      blog.categories = req.body.categories || blog.categories;
      blog.title = req.body.title || blog.title;
      blog.description = req.body.description || blog.description;
      blog.image = req.body.image || blog.image;
      blog.content = req.body.content || blog.content;
      blog.createdAt = req.body.createdAt || blog.createdAt;
      blog.updatedAt = req.body.updatedAt || blog.updatedAt;
      const updatedBlog = await blog.save();
      return res.status(200).json({ message: "Blog updated!", data: updatedBlog });
    } else {
      return res.status(404).json({ message: "Blog not found!", data: [] });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, data: [] });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (blog) {
      return res.status(200).json({ message: "Blog deleted!" });
    } else {
      return res.status(404).json({ message: "Blog not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlog,
  getBlogsByAuthorId,
  getBlogsByCategoryId,
  updateBlog,
  deleteBlog,
};
