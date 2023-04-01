import React, { useReducer } from "react";
import { createContext } from "react";
import useState from "react";
import blogReducer from "../reducer/blogReducer";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPost, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "ADD_BLOGPOST" });
  };
  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
