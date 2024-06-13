import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-primary text-white py-2'>
      <nav className='container navbar navbar-expand-lg navbar-dark'>
        <Link className='navbar-brand' to='/'>
          My Website
        </Link>
        <div className='input-group flex-grow-1 mx-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search...'
            aria-label='Search'
            aria-describedby='button-addon2'
          />
          <button
            className='btn btn-outline-light'
            type='button'
            id='button-addon2'>
            Search
          </button>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/menu'>
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/contact'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/blog'>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/order'>
                Order
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
