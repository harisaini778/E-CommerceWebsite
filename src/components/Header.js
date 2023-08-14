import React from "react";
import { Button, Container, Navbar,Stack} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { useContext } from "react";
import { CartContext } from "./CartContextProvider";
import Cart from "./Cart";


const Header = () => {

 const cartCtx = useContext(CartContext)

  const isLoggedIn = !!cartCtx.token;

  return (
    <Navbar expand="lg" className="fixed-top navbar navbar-link-header" variant="dark">
      <Container>
        <Navbar.Brand><h1>The Generics</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbar-link-header">
          
     
          <Nav className="ml-auto">
                 <Stack  direction={window.innerWidth <= 576 ? "vertical" : "horizontal"} gap={2}>
       
            <Nav.Link href="Home" className="nav-link-header">Home</Nav.Link>
            {isLoggedIn && <Nav.Link href="Store" className="nav-link-header">Store</Nav.Link>}
            <Nav.Link href="About" className="nav-link-header">About</Nav.Link>
            {!isLoggedIn && <Nav.Link href="Login" className="nav-link-header">LogIn</Nav.Link>}
            {isLoggedIn && <Nav.Link href="Login">
              <Button onClick={cartCtx.logoutHandler} variant="outline-info" className="m-2 header-button">
               LogOut
              </Button>
      
              </Nav.Link>}
              <Nav.Link href="ContactUs" className="nav-link-header">Contact Us</Nav.Link>
             </Stack>
            </Nav>
        
          <Button onClick={cartCtx.cartDisplayHandler} className="m-2 header-button" variant="outline-info">Cart</Button>
       
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
