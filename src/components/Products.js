import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Products.css";
import { CartContext } from "./CartContext";

const Products = () => {
  const { cartData, setCartData } = useContext(CartContext);

  const productsArr = [
    {
      title: 'Album 1',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Album 2',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Album 3',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Album 4',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

   const addToCart = (product) => {
    const existingProduct = cartData.find((item) => item.title === product.title);

    if (existingProduct) {
      const updatedCartData = cartData.map((item) => {
        if (item.title === product.title) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartData(updatedCartData);
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
    }
  };

  const rows = [];

  for (let i = 0; i < productsArr.length; i += 2) {
    const firstProduct = productsArr[i];
    const secondProduct = productsArr[i + 1];

    const row = (
      <Row key={i}>
        <Col className="product-container">
          <h2 className="product-title">{firstProduct.title}</h2>
          <img src={firstProduct.imageUrl} alt={firstProduct.title} />
          <Row>
            <Col>
              <h5 className="product-price">Price: ${firstProduct.price}</h5>
            </Col>
            <Col>
              <Button
                className="product-button"
                onClick={() => addToCart(firstProduct)}
              >
                Add to cart
              </Button>
            </Col>
          </Row>
        </Col>
        {secondProduct && (
          <Col className="product-container">
            <h2 className="product-title">{secondProduct.title}</h2>
            <img src={secondProduct.imageUrl} alt={secondProduct.title} />
            <Row>
              <Col>
                <h5 className="product-price">Price: ${secondProduct.price}</h5>
              </Col>
              <Col>
                <Button
                  className="product-button"
                  onClick={() => addToCart(secondProduct)}
                >
                  Add to cart
                </Button>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    );

    rows.push(row);
  }

  return (
    <Container>
      <h1 className="product-heading">Music</h1>
      {rows}
    </Container>
  );
};

export default Products;
