import React from "react";

import PropTypes from "prop-types";

import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Categories({ categories, removeCategory }) {
  const nav = useNavigate();
  if (!categories && !categories?.length) return null;
  return (
    <div className="flex-wrap">
      {categories.map((category, index) => {
        return (
          <p
            key={index}
            className="category-tag"
            style={{
              color: category.color,
              backgroundColor: category.color + "33",
            }}
            onClick={() => removeCategory ? removeCategory(category) : nav(`/blogs/${category.id}`)}
          >
            {category.title}
          </p>
        );
      })}
    </div>
  );
}

Categories.prototype = {
  categories: PropTypes.array.isRequired,
};