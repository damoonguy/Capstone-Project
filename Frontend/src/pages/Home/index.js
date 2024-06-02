import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";

import blogService from "../../services/blogService";
import categoryService from "../../services/categoriesService";

export default function HomePage() {
  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRes = await blogService.fetchBlogs();
        const categoryRes = await categoryService.fetchCategories();
        setBlogs(blogsRes.data);
        setCategories(categoryRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <SubHeading subHeading={"Recent blog posts"} />
        <BlogGrid blogPosts={blogs} />
        <CategoriesList categories={categories} />
        <Footer />
      </div>
    </>
  );
}