import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import BlogList from "../../components/BlogList";
import AddEditBlogModal from "../../components/AddEditBlogModal";
import AuthorDetails from "../../components/AuthorDetails";

import blogService from "../../services/blogService";

export default function ProfilePage() {
    let { authorId } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const getAuthorBlogs = async () => {
        try {
          setIsLoading(true);
          const blogs = await blogService.getBlogsByAuthorId(authorId);
          setBlogs(blogs.data);
          setIsSuccess(true);
          setMessage(blogs.message);
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
          setMessage(error.message || error);
        }
      };
      getAuthorBlogs();
    }, [authorId]);
  
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
          <AuthorDetails /> 
          <p className="page-subtitle">Author Blog Posts</p>
          <BlogList blogPosts={blogs} />
          <Footer />
        </div>
        {/* <EditProfileModal /> */}
        <AddEditBlogModal />
        {/* <DeleteBlogModal /> */}
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