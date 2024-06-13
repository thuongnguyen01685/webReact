import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <Navbar expand='md' className='bg-body-tertiary' fixed='top'>
      <Container fluid className='custom-container'>
        <Navbar.Brand href='#home'>My website</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          collapseOnSelect
          id='basic-navbar-nav'
          className='justify-content-end'>
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/menu'>Menu</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/blog'>Blog</Nav.Link>
            <Nav.Link href='/order'>Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
