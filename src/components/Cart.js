import React from "react";
import { Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

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
    const totalQuantity = cartElements.reduce((total, item) => total + item.quantity, 0);

    return (
      <div>
        {cartElements.map((item, index) => (
          <div key={index}>
            <Row>
              <Col>
                <img src={item.imageUrl} alt={item.title} />
              </Col>
              <Col>{item.title}</Col>
              <Col>${item.price}</Col>
              <Col>
                {item.quantity}
                <input type="number" />
                <Button>Remove</Button>
              </Col>
            </Row>
          </div>
        ))}
        <Row>
          <Col>
            <h1>Total Price : </h1>
            <p>{totalQuantity}</p>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <div>
      <Container>
        <h1>Cart</h1>
      </Container>
      <Container>
        <Row>
          <Col>Item</Col>
          <Col>Price</Col>
          <Col>Quantity</Col>
        </Row>
      </Container>
      <CartProducts />
    </div>
  );
};

export default Cart;
