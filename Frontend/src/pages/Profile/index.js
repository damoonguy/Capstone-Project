import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import BlogList from "../../components/BlogList";
import AddEditBlogModal from "../../components/AddEditBlogModal";
import DeleteBlogModal from "../../components/DeleteBlogModal";

import "./index.css";

import {
  setEditUser
} from "../../features/authSlice";

import blogService from "../../services/blogService";
import authService from "../../services/authService";
import EditProfileModal from "../../components/EditProfileModal";
import { useDispatch } from "react-redux";

export default function ProfilePage() {

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("user"));
    let { authorId } = useParams();
    const [author, setAuthor] = useState();
    const [blogs, setBlogs] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const getAuthorBlogs = async () => {
        try {
          setIsLoading(true);
          const author = await authService.getUser(authorId);
          const blogsRes = await blogService.fetchBlogsByAuthorId(authorId);
          setBlogs(blogsRes.data);
          setAuthor(author.data);
          setIsSuccess(true);
          setMessage(blogsRes.message);
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

    const onProfileEdit = () => {
      dispatch(setEditUser(author));
    }
    

    const AuthorDetails = () => {
      return (
        <div id="author-details" className="col-md-12 col-lg-12 col-xl-12 mx-auto">
          <div className="position-sticky my-5" style={{ top: "2rem" }}>
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">
                {author.firstName} {author.lastName}
              </h4>
              {user && user.token ? <button id="edit-profile-button" className="btn btn-outline-dark m-3" onClick={onProfileEdit}>
              EDIT PROFILE
            </button> : null}
              <img src={author.image} className="avatar" alt="..." />
              <h4>Bio:</h4>
              <p>{author.bio}</p>
            </div>
          </div>
        </div>
      );
    };
  
    if (isLoading || !author || !blogs) {
      return <Loading />;
    }
  
    return (
      <>
        <Navbar />
        <div className="container">
          <AuthorDetails /> 
          <p className="page-subtitle">Author Blog Posts</p>
          <BlogList blogs={blogs} />
          <Footer />
        </div>
        <EditProfileModal/>
        <AddEditBlogModal />
        <DeleteBlogModal />
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