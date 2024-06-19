import React from "react";
import PropTypes from "prop-types";

import BlogItemText from "../BlogItemText";
import EditButtons from "../EditButtons";
import Categories from "../Categories";

import "../../App.css";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function BlogItem({
  index,
  blog,
  imageOrientation
}) {
  
  const nav = useNavigate();


  if (imageOrientation === "top") {
    return (
      <div
        key={index}
        className="card-1"
        onClick={() => nav(`/blog/${blog.id}`)}
      >
        <img src={blog.image} className="card-img-top" alt="..." />
        <div className="card-text-bottom">
          <BlogItemText blogPost={blog} headerFontSize="20px" />
          <Categories categories={blog.categories} />
        </div>
        
      </div>
    );
  } else {
    return (
      <div
        key={index}
        className="card-2"
        onClick={() => nav(`/blog/${blog.id}`)}
      >
        <img src={blog.image} className="card-img-left" alt="..." />
        <div style={{ position: "relative" }} className="card-text-right">
          <BlogItemText blogPost={blog} headerFontSize="20px" />
          <Categories categories={blog.categories} />
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