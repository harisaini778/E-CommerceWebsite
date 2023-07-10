import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import Cart from "./Cart";
import { useState } from "react";

const Header = () => {
  const [cartToggle, setCartToggle] = useState(false);

  const cartDisplayHandler = () => {
    setCartToggle(!cartToggle);
  };

  return (
    <Navbar expand="lg" className="fixed-top bg-dark navbar" variant="dark">
      <Container>
        <Navbar.Brand><h1>The Generics</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Store">Store</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="ContactUs">Contact Us</Nav.Link>
          </Nav>
          <Button onClick={cartDisplayHandler} className="cart-button btn-light">Cart</Button>
        </Navbar.Collapse>
      </Container>
      {cartToggle && (
        <div className="overlay-cart-container">
          <Cart cartClose={cartDisplayHandler} />
        </div>
      )}
    </Navbar>
  );
};

export default Header;
