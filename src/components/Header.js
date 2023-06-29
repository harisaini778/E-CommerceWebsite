import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  {Button, Container} from "react-bootstrap";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Header.css";

const Header = () => {
  
    
    return (
        <div>
            <Nav className="bg-dark">  
            <Container>
            <Row className="row">
            <Col className="text-white col">Home</Col>
            <Col className="text-white col">Store</Col>
            <Col className="text-white col">About</Col>
            <Col className=""><Button className="button">Cart</Button></Col> 
            </Row>
             </Container>       
            </Nav>
            <Nav className="bg-dark">
                <Container><h1 className="text-white header-title">The Generics</h1> </Container>
            </Nav>
        </div>
    );
}

export default Header;