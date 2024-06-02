import React from "react";

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
  const nav = useNavigate();
  const navToBlog = () => {
    if (!onBlogEdit && !onBlogDelete) {
      nav(`/blog/${blog.id}`);
    }
  }
  const EditButtonsContainer = () => {
    return (
      <EditButtons
        onEdit={() => onBlogEdit(blog)}
        onDelete={() => onBlogDelete(blog)}
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
          {onBlogEdit && onBlogDelete ? <EditButtonsContainer /> : null}
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
          {onBlogEdit && onBlogDelete ? <EditButtonsContainer /> : null}
        </div>
      </div>
    );
  }
}