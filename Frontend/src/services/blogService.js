const url = "http://localhost:5000/api/blogs/";

const createBlog = async (blog) => {

    try {
        const data = await fetch(url, 
            { 

                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: blog
            }
        );
        const blogsApiData = await data.json();
        return blogsApiData;
    } catch (err) {
        throw new Error(err);
    }
};


const getBlogs = async () => {


    try {
        const data = await fetch(url, 
            { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        console.log(data);
        const blogsApiData = await data.json();
        return blogsApiData;
    } catch (err) {
        throw new Error(err);
    }
};

const getBlogById = async (blogId) => {

    try {
        const data = await fetch(url+blogId, 
            { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const result = await data.json();
        return result;
    } catch (err) {
        throw new Error(err);
    }
};

const getBlogsByAuthorId = async (authorId) => {
  try {
    const response = await fetch(url+"author/" + authorId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    console.log(responseData.message);
    return responseData;
  } catch (error) {
    throw new Error(error);
  }
};

const getBlogsByCategoryId = async (categoryId) => {


    try {
        const data = await fetch(url+"category/"+categoryId, 
            { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const blogsApiData = await data.json();
        return blogsApiData;   
    } catch (err) {
        throw new Error(err);
    }
};

const updateBlog = async (blog) => {

    try {
        const data = await fetch(url+blog.get("id"), 
            { 
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: blog
            }
        );
        const result = await data.json();
        return result;
    } catch (err) {
        throw new Error(err);
    }
};

const deleteBlog = async (blogId) => {

    try {
        const data = await fetch(url+blogId, 
            { 
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const result = await data.json();
        return result;
    } catch (err) {
        throw new Error(err);
    }
};


const blogService = {
  createBlog,
  getBlogs,
  getBlogsByCategoryId,
  getBlogsByAuthorId,
  getBlogById,
  updateBlog,
  deleteBlog,
};

export default blogService;