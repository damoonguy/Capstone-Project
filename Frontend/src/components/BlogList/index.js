import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import BlogItem from "../BlogItem";
import EditButtons from "../EditButtons";

import "./index.css";

import {
  setDeleteBlog,
  setEditBlog,
} from "../../features/blogsSlice";
import { useNavigate } from "react-router-dom";

export default function BlogList({ blogs }) {

  const user = JSON.parse(localStorage.getItem("user"));

  const nav = useNavigate();
  const dispatch = useDispatch();


  const EditButtonsContainer = (blog) => {
    return (
      <EditButtons
        onEdit={() => onBlogEdit(blog)}
        onDelete={() => onBlogDelete(blog)}
        onNavigate={() => nav(`/blog/${blog.id}`)}
        onBlog={true}
      />
    );
  };


  if (!blogs && !blogs?.length) {
    return null;
  }

  const onBlogEdit = (blog) => {
    dispatch(setEditBlog(blog));
  }

  const onBlogDelete = (blog) => {
    dispatch(setDeleteBlog(blog));
  }

  return (
    <div className="container">
      <div className="row">
      {blogs.map((blog, index) => {
        return (
          <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
          <BlogItem
            key={index}
            index={index}
            blog={blog}
            imageOrientation="top"
          />
          {user && user.token && user._id === blog.author.id ? 
          EditButtonsContainer(blog) : null}
          </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

BlogList.prototype = {
  blogs: PropTypes.array.isRequired,
};