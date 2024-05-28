const createBlog = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Create new blog!",
    data: req.params,
  });
};

const getBlogs = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Return all blogs!",
    data: req.params,
  });
};

const getBlogsByCategoryId = (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  res.status(200).json({
    message: "Return all blogs by category id!",
    data: req.params,
  });
};

const getBlogById = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Return blog by ID!",
    data: req.params,
  });
};

const updateBlogById = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Update blog by ID!",
    data: req.params,
  });
};

const deleteBlogById = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Delete blog by ID!",
    data: req.params,
  });
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  getBlogsByCategoryId,
  updateBlogById,
  deleteBlogById,
};
