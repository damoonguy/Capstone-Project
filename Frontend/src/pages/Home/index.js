import React from "react";
import { useEffect, useState } from "react";


import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoriesList from "../../components/CategoriesList";
import blogService from "../../services/blogService";
import categoriesService from "../../services/categoriesService";

// Week 1: Import the blogPosts and categories from the dummy-data.json file


export default function HomePage() {

  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState(null);

  useEffect(() => {

    const fetchBlogsCats = async () => {
      try {
        const cats = await categoriesService.getCategories();
        const blogsRes = await blogService.getBlogs();
        setBlogs(blogsRes);
        setCategories(cats);
      } catch (err) {
        throw new Error(err);
      }
    }
    fetchBlogsCats();
    }, []);



  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoriesList categories={categories}></CategoriesList>
        <Footer />
      </div>
    </>
  );
}