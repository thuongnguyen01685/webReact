import React, { useState } from "react";
import { Card } from "react-bootstrap";

const Menu = () => {
  // Dữ liệu mẫu: danh sách các danh mục và sản phẩm
  const categories = [
    { id: 1, name: "Appetizers" },
    { id: 2, name: "Main Courses" },
    { id: 3, name: "Desserts" },
    { id: 4, name: "Drinks" },
  ];

  const products = [
    {
      id: 1,
      categoryId: 1,
      name: "Spring Rolls",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      categoryId: 1,
      name: "Chicken Wings",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      categoryId: 2,
      name: "Pasta Carbonara",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      categoryId: 2,
      name: "Steak with Potatoes",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      categoryId: 3,
      name: "Chocolate Cake",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      categoryId: 3,
      name: "Ice Cream",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 7,
      categoryId: 4,
      name: "Soda",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 8,
      categoryId: 4,
      name: "Coffee",
      image: "https://via.placeholder.com/100",
    },
  ];

  // State để lưu trữ danh mục và sản phẩm
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((product) => product.categoryId === categories[0].id)
  );

  // Hàm xử lý khi chọn một danh mục mới
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const newFilteredProducts = products.filter(
      (product) => product.categoryId === category.id
    );
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className='container mt-5'>
      <h1>Menu</h1>

      {/* Danh sách các danh mục */}
      <div className='row mt-4'>
        <div className='col'>
          <ul className='nav nav-pills'>
            {categories.map((category) => (
              <li className='nav-item' key={category.id}>
                <button
                  className={`nav-link btn ${
                    selectedCategory.id === category.id
                      ? "btn-primary"
                      : "btn-light"
                  }`}
                  onClick={() => handleCategoryChange(category)}>
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className='row mt-4'>
        {filteredProducts.map((product) => (
          <div className='col-md-3 mb-3' key={product.id}>
            <div className='card'>
              <div className='card-body'>
                <Card.Img variant='top' src={product.image} />
                <h5 className='card-title mt-2'>{product.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
