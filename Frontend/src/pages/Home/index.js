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
import Loading from "../../components/Loading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";

// Week 1: Import the blogPosts and categories from the dummy-data.json file


// export default function HomePage() {

//   const [blogs, setBlogs] = useState();
//   const [categories, setCategories] = useState(null);

//   useEffect(() => {

//     const fetchData = async () => {
//       try {
//         console.log("HELP HOME");
//         const cats = await categoriesService.fetchCategories();
//         const blogsRes = await blogService.getBlogs();
//         setBlogs(blogsRes);
//         setCategories(cats);
//       } catch (err) {
//         throw new Error(err);
//       }
//     }
//     fetchData();
//     }, []);



//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <SubHeading subHeading={"Recent Blog Posts"} />
//         <BlogGrid blogPosts={blogs}></BlogGrid>
//         <SubHeading subHeading={"Categories"} />
//         <CategoriesList categories={categories}></CategoriesList>
//         <Footer />
//       </div>
//     </>
//   );
// }

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const blogs = await blogService.getBlogs();
        const cats = await categoriesService.fetchCategories();
        setBlogs(blogs.data.reverse());
        setCategories(cats);
        setIsSuccess(true);
        setMessage(blogs.message);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setMessage(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const resetSuccess = () => {
    setIsSuccess(false);
    setMessage("");
  }

   const resetError = () => {
    setIsError(false);
    setMessage("");
  }

  if (isLoading) {
    return <Loading />;
  }

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
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={resetSuccess}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={resetError}
      />
    </>
  );
}