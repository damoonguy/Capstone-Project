import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";


import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Loading from "../../components/Loading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";

// import blogService from "../../services/blogService";
// import categoryService from "../../services/categoriesService";

import { fetchBlogs, resetSuccessAndError as resetBlogs } from "../../features/blogsSlice";
import { fetchCategories, resetSuccessAndError as resetCategory } from "../../features/categoriesSlice";


export default function HomePage() {
  // const [blogs, setBlogs] = useState();
  const dispatch = useDispatch();

  const {
    blogs,
    isError: isBlogsError,
    isSuccess: isBlogSuccess,
    isLoading: isLoadingBlogs,
    message: blogsMessage,
  } = useSelector((state) => state.blogs);

  const {
    categories,
    isError: isCategoriesError,
    isSuccess: isCategoriesSuccess,
    isLoading: isLoadingCategories,
    message: categoriesMessage,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBlogs());
    return () => {
      dispatch(resetBlogs());
      dispatch(resetCategory());
    };
  }, [dispatch]);

  if (isLoadingCategories || isLoadingBlogs) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoriesList categories={categories}></CategoriesList>
        <Footer />
      </div>
      <SuccessToast
        show={isBlogSuccess || isCategoriesSuccess}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlogs());
          dispatch(resetCategory());
        }}
      />
      <ErrorToast
        show={isBlogsError || isCategoriesError}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlogs());
          dispatch(resetCategory());
        }}
      />
    </>
  );
}