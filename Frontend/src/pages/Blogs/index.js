import React, { useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";

import "../../App.css";
import "./index.css";
import categoriesService from "../../services/categoriesService";
import blogService from "../../services/blogService";


// Week 1: Import the blogPosts and categories from the dummy-data.json file


export default function BlogsPage() {

  let { categoryIdPassed } = useParams();
  const [ blogs, setBlogs] = useState();
  const [ categories, setCategories] = useState();

  const [ loading, setLoading ] = useState(true);


  useEffect(() => {
    const fetchCatsBlogs = async () => {
        const cats = await categoriesService.getCategories();
        const blogsRes = await blogService.getBlogsByCategoryId(categoryIdPassed || null);
        setCategories(cats);
        setBlogs(blogsRes);
        setLoading(false);
    }
    fetchCatsBlogs();
  }, [categoryIdPassed]);



  const CategoriesList = ({categoryId}) => {
    if (!categories && !categories?.length) {
      return null;
    }

    return categories.map((category) => {
      return categoryId === category.id.toString() ? (
        <Link
          key={category.id}
          to={"/blogs/"+category.id}
          style={{ color: "blue" }}
          onClick={() => setLoading(true)}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      ) : (
        <Link
          key={category.id}
          to={"/blogs/"+category.id}
          style={{ color: "black" }}
          onClick={() => setLoading(true)}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      );
    });
  }

   if (loading) {
     return (
       <div className="d-flex justify-content-center align-items-center">
         <div className="spinner-border" role="status">
           <span className="visually-hidden">Loading...</span>
         </div>
       </div>
     );
   }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList categoryId={categoryIdPassed} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogPosts={blogs} />
      </div>
      <Footer />
    </>
  );
}