import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import BlogsPage from "./pages/Blogs";
import BlogPage from "./pages/Blog";
import CategoriesPage from "./pages/Categories";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";


const routes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
  {
    path: "/blogs/:categoryIdPassed?",
    element: <BlogsPage />,
  },
  {
    path: "/blog/:blogId",
    element: <BlogPage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/profile/:authorId",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;