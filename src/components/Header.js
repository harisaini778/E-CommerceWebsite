import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { useContext } from "react";
import { CartContext } from "./CartContextProvider";
import Cart from "./Cart";


const Header = () => {

 const cartCtx = useContext(CartContext)

  const isLoggedIn = !!cartCtx.token;

  return (
    <Navbar expand="lg" className="fixed-top bg-dark navbar" variant="dark">
      <Container>
        <Navbar.Brand><h1>The Generics</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            {isLoggedIn && <Nav.Link href="Store">Store</Nav.Link>}
            <Nav.Link href="About">About</Nav.Link>
            {!isLoggedIn && <Nav.Link href="Login">LogIn</Nav.Link>}
            {isLoggedIn && <Nav.Link href="Login">
              <Button onClick={cartCtx.logoutHandler} className="btn-info cart-button">
               LogOut
              </Button>
              </Nav.Link>}
            <Nav.Link href="ContactUs">Contact Us</Nav.Link>
          </Nav>
          <Button onClick={cartCtx.cartDisplayHandler} className="cart-button btn-info">Cart</Button>
        </Navbar.Collapse>
      </Container>
       {cartCtx.cartToggle && (
        <div className="overlay-cart-container">
          <Cart/>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
