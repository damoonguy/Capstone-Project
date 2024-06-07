import React from "react";
import PropTypes from "prop-types";

import BlogItemText from "../BlogItemText";
import EditButtons from "../EditButtons";

import "../../App.css";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function BlogItem({
  index,
  blog,
  imageOrientation,
  onBlogEdit,
  onBlogDelete,
}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const nav = useNavigate();
  const navToBlog = () => {
    if ((!user && !user?.token) || (!onBlogEdit && !onBlogDelete)) {
      nav(`/blog/${blog.id}`);
    }
  }

  const EditButtonsContainer = () => {
    return (
      <EditButtons
        onEdit={() => onBlogEdit(blog)}
        onDelete={() => onBlogDelete(blog)}
        onNavigate={() => nav(`/blog/${blog.id}`)}
      />
    );
  };


  if (imageOrientation === "top") {
    return (
      <div
        key={index}
        className="card-1"
        onClick={() => navToBlog()}
      >
        <img src={blog.image} className="card-img-top" alt="..." />
        <div className="card-text-bottom">
          <BlogItemText blogPost={blog} headerFontSize="20px" />
          {user && user.token && onBlogEdit && onBlogDelete ? 
          <EditButtonsContainer /> : null}
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={index}
        className="card-2"
        onClick={() => navToBlog()}
      >
        <img src={blog.image} className="card-img-left" alt="..." />
        <div style={{ position: "relative" }} className="card-text-right">
          <BlogItemText blogPost={blog} headerFontSize="20px" />
          {user && user.token && onBlogEdit && onBlogDelete ? 
          <EditButtonsContainer /> : null}
        </div>
      </div>
    );
  }
}

BlogItem.propTypes = {
  index: PropTypes.number.isRequired,
  blog: PropTypes.object.isRequired,
  imageOrientation: PropTypes.string.isRequired,
  onBlogEdit: PropTypes.func,
  onBlogDelete: PropTypes.func,
};