// Third party
import React from "react";
import { useState, useEffect } from "react";

// Components
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import CategoryList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import categoriesService from "../../services/categoriesService";

// Styles
import "../../App.css";
import { Form } from "react-router-dom";

// Week 1: Import the blogPosts and categories from the dummy-data.json file


export default function CategoriesPage() {

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cats = await categoriesService.getCategories();
        setCategories(cats);
      } catch (err) {
        throw new Error(err);
      }
    }
    fetchCategories();
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Categories</p>
        </div>
        <CategoryList categories={categories}></CategoryList>
      </div>
      <Footer />
    </>
  );
}