import React from "react";
import { Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Cart.css";

const Cart = () => {
  const cartElements = [
    {
      title: 'Album 1',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Album 2',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Album 3',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    }
  ];

  const CartProducts = () => {
    const totalQuantity = cartElements.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
      <div className="cart-products">
        {cartElements.map((item, index) => (
          <div key={index}>
            <Row>
              <Col>
                <img src={item.imageUrl} alt={item.title} className="cart-image" />
                <p>{item.title}</p>
              </Col>
              <Col><p className="product-price">${item.price}</p></Col>
              <Col>
                <input type="number" value={item.quantity} className="input-box" />
                <Button className="btn-danger remove-btn">Remove</Button>
              </Col>
            </Row>
          </div>
        ))}
        <Row>
          <h4 className="total-price">Total Price : ${totalQuantity} </h4>
        </Row>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-end vh-100 cart-align">
      <Card>
        <Container>
          <h1 className="cart-heading">Cart</h1>
        </Container>
        <Container>
          <Row className="cart-details">
            <Col xs={4}>Item</Col>
            <Col xs={4}>Price</Col>
            <Col xs={4}>Quantity</Col>
          </Row>
        </Container>
        <CartProducts />
      </Card>
    </div>
  );
};

export default Cart;
