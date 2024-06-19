import React from "react";
import PropType from "prop-types";

import BlogItem from "../BlogItem";

import "./index.css";

export default function BlogGrid({ blogPosts }) {
  if (!blogPosts && !blogPosts?.length) {
    return null;
  }
  return (
    <>
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                {blogPosts.length > 0 && (
                  <BlogItem imageOrientation="top" index={0} blog={blogPosts[0]} />
                )}
              </div>
          </div>
  
          <div className="col-12 col-md-6 col-lg-6 d-flex flex-column">
            {blogPosts.length > 1 && (
              <div className="card">
                <BlogItem imageOrientation="left" index={1} blog={blogPosts[1]} />
              </div>
            )}
  
            {blogPosts.length > 2 && (
              <div className="card mt-4">
                <BlogItem index={2} blog={blogPosts[2]} />
              </div>
            )}
          </div>
        </div>
  
        {blogPosts.length > 3 && (
          <div className="row">
            <div className="col-12 mb-3 mt-3">
              <div className="card">
              <BlogItem index={3} blog={blogPosts[3]} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

BlogGrid.prototype = {
  blogPost: PropType.array.isRequired,
};