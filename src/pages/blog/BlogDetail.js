import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../../utils/dataFake";
import ItemCardBlog from "./ItemCardBlog";

const BlogDetail = () => {
  const { id } = useParams();

  const blogPost = blogPosts.find((post) => post.id === id);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  const renderBlogRelated = (
    <div className='row'>
      {blogPosts.map((item) =>
        item.id !== id ? (
          <div className='col-lg-4 col-md-6 mb-4' key={item.id}>
            <ItemCardBlog item={item} />
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );

  return (
    <div className='container mt-5'>
      <img
        src={blogPost.image}
        className='card-img-top center'
        alt='blog'
        style={{ width: "50%", height: "300px", objectFit: "contain" }}
      />
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
      <Link to='/blog' className='btn btn-primary mb-3'>
        Back to Blog
      </Link>

      <h3 className='mb-3'>Related blog</h3>
      {renderBlogRelated}
    </div>
  );
};

export default BlogDetail;
