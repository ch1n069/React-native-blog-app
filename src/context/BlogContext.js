import React from "react";
import { createContext } from "react";
import useState from "react";

const BlogContext = React.createContext();
const blogPosts = [{ title: "one" }, { title: "two" }];

export const BlogProvider = ({ children }) => {
  const [blogPost, setBlogPost] = useState([]);
  const addBlogPost = () => {
    setBlogPost([...blogPost, { title: `Blog Post #${blogPost.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
