// Cart.js
import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Cart.css";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartData } = useContext(CartContext);

  const CartProducts = () => {
    if (!cartData || cartData.length === 0) {
      return <p>No items in the cart</p>;
    }

    const totalQuantity = cartData.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    return (
      <div className="cart-products">
        {cartData.map((item, index) => (
          <div key={index}>
            <Row>
              <Col>
                <img src={item.imageUrl} alt={item.title} className="cart-image" />
                <p>{item.title}</p>
              </Col>
              <Col>
                <p className="product-price">${item.price}</p>
              </Col>
              <Col>
                <input type="number" value={item.quantity} className="input-box" />
                <Button className="btn-danger remove-btn">Remove</Button>
              </Col>
            </Row>
          </div>
        ))}
        <Row>
          <h4 className="total-price">Total Price: ${totalQuantity}</h4>
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
