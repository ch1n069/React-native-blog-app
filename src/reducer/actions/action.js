import React, { useReducer } from "react";
import React from "react";
// import { blogPost } from "../initialState/InitialState";
import blogReducer from "../reducer/blogReducer";
import { blogPost } from "../initialState/initialState";

const [blogPost, dispatch] = useReducer(blogReducer, blogPost);

export const addBlogPost = () => {
  return () => {
    dispatch({ type: "ADD_BLOGPOST" });
  };
};
