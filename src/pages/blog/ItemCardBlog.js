import React from "react";
import { Link } from "react-router-dom";

const ItemCardBlog = ({ item }) => {
  return (
    <div className='card mb-3'>
      <img
        src={item.image}
        className='card-img-top'
        alt='blog'
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />
      <div className='card-body'>
        <h2 className='card-title'>{item.title}</h2>
        <p className='card-text'>{item.content}</p>
        <Link to={`/blog/${item.id}`} className='btn btn-primary'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ItemCardBlog;
