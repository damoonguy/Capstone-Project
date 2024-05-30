import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar";
import SubHeading from "../../components/SubHeading";


import { useParams } from "react-router-dom";

import blogService from "../../services/blogService";



export default function BlogPage() {
    let { blogId } = useParams();
    
    const [blog, setBlog] = useState();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
              const blogRes = await blogService.getBlogById(blogId);
              setBlog(blogRes);
            } catch (err) {
              throw new Error(err);
            }
          }
          fetchBlog();
    }, [blogId]);
    
      
    console.log(blog);


   


    function BlogAuthor() {
        if (blog.author !== undefined) {
            return <h2>Written by: { blog.author.firstName+" "+blog.author.lastName }</h2>;
        } 
    }
    
    
    

    return (
        <div> 
            <Navbar/>
            {/* <SubHeading subHeading={blog.title} style={"font-size: 144px;"}/> 
            <h1>This is blog { blogId }</h1>
            <BlogAuthor/> */}
        </div>
    );
}