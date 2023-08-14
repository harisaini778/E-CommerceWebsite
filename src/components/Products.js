import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Products.css";
import { CartContext } from "./CartContextProvider";
import { Alert } from "react-bootstrap";



const Products = () => {

  const cartCtx = useContext(CartContext);
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const productsArr = [
    {
      id: 1,
      title: 'Album 1',
      price: 90,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id: 2,
      title: 'Album 2',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      id: 3,
      title: 'Album 3',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: 4,
      title: 'Album 4',
      price: 80,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
      {
      id: 5,
      title: 'Album 5',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: 6,
      title: 'Album 6',
      price: 75,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    }

  ];


 
  return (
    <Container>
      <h1 className="product-heading">Music</h1>
      {/* Display the success message at the top */}
      {showSuccessMessage && (
        <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
          Your Item has been added to the cart successfully!
        </Alert>
      )}
      <Row>
        {productsArr.map((product) => (
          <Col key={product.id} className="product-container" xs={12} md={6} lg={6}>
            <Link to={`/${product.id}`}>
              <img src={product.imageUrl} alt={product.title} className="product-image" />
            </Link>
            <Row>
              <Col xs={12} md={12} lg={12}>
                <h5 className="product-price">Price: ${product.price}</h5>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <div className="d-grid">
                  <Button
                    className="product-button"
                    size="lg"
                    variant="outline-success"
                    onClick={() => {
                      console.log("Add to cart clicked:", product);
                      cartCtx.addToCart(product);
                      setShowSuccessMessage(true); // Show success message
                    }}
                  >
                    Add to cart
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;