import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Cart.css";
import { CartContext } from "./CartContextProvider";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const CartProducts = () => {
    if (!cartCtx.cartData || cartCtx.cartData.length === 0) {
      return (
        <Row>
          <Col xs={12}>
            No items in the cart
          </Col>
        </Row>
      );
    }

    const totalQuantity = cartCtx.cartData.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    const handleRemoveItem = (title) => {
      cartCtx.removeFromCart(title);
    };

    const handleQuantityChange = (event, title) => {
      const newQuantity = parseInt(event.target.value);
      cartCtx.updateQuantity(title, newQuantity);
    };

    return (
      <div className="cart-products">
        {cartCtx.cartData.map((item, index) => (
          <div key={index}>
            <Row>
              <Col xs={6} md={4} lg={4}>
                <img src={item.imageUrl} alt={item.title} className="cart-image" />
                <p className="item-title">{item.title}</p>
              </Col>
              <Col xs={6} md={4} lg={4}>
                <p className="item-price">${item.price}</p>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <input
                  type="number"
                  value={item.quantity}
                  className="input-box"
                  onChange={(event) => handleQuantityChange(event, item.title)}
                />
                <Button
                  className="btn-danger remove-btn"
                  onClick={() => handleRemoveItem(item.title)}
                >
                  Remove
                </Button>
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
      <Card className="cart-card">
        <Container>
          <Button className="close-btn btn-dark" onClick={cartCtx.handleCartClose}>X</Button>
          <h1 className="cart-heading">Cart</h1>
        </Container>
        <Container>
          <Row className="cart-details">
            <Col xs={12} md={4} lg={4}>Item</Col>
            <Col xs={12} md={4} lg={4}>Price</Col>
            <Col xs={12} md={4} lg={4}>Quantity</Col>
          </Row>
        </Container>
        <CartProducts />
      </Card>
    </div>
  );
};

export default Cart;
