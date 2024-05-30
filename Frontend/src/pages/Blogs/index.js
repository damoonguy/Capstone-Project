import React, { useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import CategoriesList from "../../components/CategoriesList";

import categoriesService from "../../services/categoriesService";
import blogService from "../../services/blogService";
import AddEditBlogModal from "../../components/AddEditBlogModal";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";

import "../../App.css";
import "./index.css";




// Week 1: Import the blogPosts and categories from the dummy-data.json file


export default function BlogsPage() {

  let { categoryIdPassed } = useParams();
  const [ blogs, setBlogs] = useState();
  const [ categories, setCategories] = useState();

  const [addBlog, setAddBlog ] = useState();

  const [ loading, setLoading ] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");


  const onBlogAddClick = ()=> {
    setAddBlog({
      title: "Test blog updated",
      description: "Test blog description",
      authorId: 1,
      image: "https://www.google.com/aclk?sa=l&ai=DChcSEwjKnrq7rLKGAxVUkVAGHVcmDCcYABAKGgJkZw&ase=2&gclid=Cj0KCQjwpNuyBhCuARIsANJqL9NpIPYuUWk6_YQjn41HY1oAxn3mpYBaRWmR5Y2xJ2xVSDf-0q-3s0IaAo5YEALw_wcB&sig=AOD64_2gT_1d5Z7XwUR_XoUL-qMQed_dqw&q=&nis=4&ved=2ahUKEwjDn7K7rLKGAxWpYEEAHW-cCN4Q9pgHegQIEBAS&adurl=",
      categoryIds: [
          "category 1",
          "category 2",
          "category 3"
      ],
      content: [
          {
              sectionTitle: "Intro",
              sectionBody: "Test body"
          },
          {
              sectionTitle: "Body",
              sectionBody: "Test body"
          },
          {
              sectionTitle: "Conclusion",
              sectionBody: "Test body"
          }
      ]
  })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let blogPosts;
        if (!categoryIdPassed) {
          blogPosts = await blogService.getBlogs();
        } else {
          blogPosts = await blogService.getBlogsByCategoryId(categoryIdPassed);
        }
        
        const categoriesData = await categoriesService.fetchCategories();
        setCategories(categoriesData);
        setBlogs(blogPosts.data);
        console.log(blogs);
        setIsSuccess(true);
        setMessage(blogPosts.message);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        setMessage(error.message || error);
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryIdPassed]);

  const resetSuccess = () => {
    setIsSuccess(false);
    setMessage("Blog Successfully Created!");
  }

  const resetError = () => {
    setIsError(false);
    setMessage("Error: Blog unable to be created.");
  }



   const CategoriesList = () => {
    

     return categories.map((category) => {
       return categoryIdPassed === category.id.toString() ? (
        
         <Link
           key={category.id}
           to={"/blogs/category/"+category.id}
           style={{ color: "blue" }}
           onClick={() => setLoading(true)}
         >
           <p key={category.id}>{category.title}</p>
         </Link>
       ) : (
         <Link
           key={category.id}
           to={"/blogs/category/"+category.id}
           style={{ color: "black" }}
           onClick={() => setLoading(true)}
         >
           <p key={category.id}>{category.title}</p>
         </Link>
       );
     });
  }

   if (loading) {
     return <Loading/>
   }

   return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList />
        </div>
        <BlogList blogPosts={blogs} />
      </div>
      <Footer />
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