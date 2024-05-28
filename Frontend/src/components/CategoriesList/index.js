import React from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";


import "./index.css";

export default function CategoriesList({ categories }) {
  const nav = useNavigate();

  
  if (!categories || !categories?.length) {
    return null;
  }

  

  return (
    <div className="category-list">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="card"
            style={{ borderRadius: "0px", border: "none" }}
            onClick={() => {
              nav("/blogs/" + category.id);
            }}
          >
            <div
              className="card-body w-100"
              style={{
                backgroundColor: category.color + "33",
                position: "relative",
                zIndex: 0,
              }}
            >
              <h5 className="card-title">{category.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                {category.description.substring(1, 100)} ...
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
};