import React from "react";
import "../../../src/assets/styles/Blog.css";
import { blogPosts } from "../../utils/dataFake";
import ItemCardBlog from "./ItemCardBlog";

const Blog = () => {
  const renderBlog = (
    <div className='row'>
      {blogPosts.map((item) => (
        <div className='col-lg-4 col-md-6 mb-4' key={item.id}>
          <ItemCardBlog item={item} />
        </div>
      ))}
    </div>
  );
  return (
    <div className='blog'>
      <h1 className='text-start mb-4'>Blog Page</h1>
      {renderBlog}
    </div>
  );
};

export default Blog;
