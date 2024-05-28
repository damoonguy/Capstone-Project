import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BlogItemText from "../BlogItemText";

import "../../App.css";
import "./index.css";


export default function BlogItem({
  index,
  blogPost,
  imageOrientation,
}) {
if (imageOrientation === "top") {
    return (
      
      <Link key={index} className="card-1" aria-current="page" to={"/blog/" + blogPost.id}>
          <img src={blogPost.image} className="card-img-top" alt="..." />
          
          <div className="card-text-bottom">
            <BlogItemText
              blogPost={blogPost}
              headerFontSize="20px"
            ></BlogItemText>
          </div>
        
      </Link>
    );
  } else {
    return (
      <Link key={index} className="card-2" to={"/blog/" + blogPost.id}>
        <img src={blogPost.image} className="card-img-left" alt="..." />
        <div className="card-text-right">
          <BlogItemText
            blogPost={blogPost}
            headerFontSize="20px"
          ></BlogItemText>
        </div>
      
      </Link>
    );
  }
}

BlogItem.propTypes = {
  index: PropTypes.number.isRequired,
  blogPost: PropTypes.object.isRequired,
  imageOrientation: PropTypes.string
};