import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  {Button, Container} from "react-bootstrap";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import Cart from "./Cart";
import { useState } from "react";

const Header = () => {

    const [cartToggle, setCartToggle] = useState(false);

    const cartDisplayHandeler = () => {
        setCartToggle(true);
    }

    return (
        <div>
            <Nav className="bg-dark">  
            <Container>
            <Row className="row">
            <Col className="text-white col">Home</Col>
            <Col className="text-white col">Store</Col>
            <Col className="text-white col">About</Col>
                        <Col className=""><Button className="button" onClick={cartDisplayHandeler}>Cart</Button></Col> 
            </Row>
             </Container>       
            </Nav>
            <Nav className="bg-dark">
                <Container><h1 className="text-white header-title">The Generics</h1> </Container>
            </Nav>
            {cartToggle && <Cart/>}
        </div>
    );
}

export default Header;