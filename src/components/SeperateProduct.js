import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button, Card, Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./SeperateProduct.css"

const SeparateProduct = () => {
  const { productId } = useParams();

  // Mock product data
  const products = [
    {
      id: 1,
      title: "Album 1",
      price: 100,
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      ],
      Devices: ["CD", "DVD", "Pendrive", "Memory-Card","Hard-Drive"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
      reviews: [
        { id: 1, author: "John", comment: "Great album!" },
        { id: 2, author: "Jane", comment: "Loved it!" },
      ],
      bankOffers: [
        { id: 1, bank: "Bank A", offer: "Get 10% off" },
        { id: 2, bank: "Bank B", offer: "EMI available" },
      ],
      purchases: 1000,
    },
    {
      id: 2,
      title: "Album 2",
      price: 50,
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      ],
      Devices: ["CD", "DVD", "Pendrive", "Memory-Card","Hard-Drive"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
      reviews: [],
      bankOffers: [],
      purchases: 500,
    },
    // Add more products
  ];

  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const { title, price, images, Devices, description, reviews, bankOffers, purchases } = product;

  return (
    <Container className="main-container-separateproducts">
      <h1 className="product-title">{title}</h1>
      <Row className="product-details-container">
        <Col xs={12} lg={6} md={6}>
          <Row>
            <Col lg={6} md={6} xs={6}>
              <Row>
                <Col xs={6} md={6} lg={6}>
                     {<div className="product-images-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={title}
                className="image-sizes"
              />
            ))}
          </div>}</Col>
              </Row>
              <Row>
                <Col xs={6} md={6} lg={6}> {<div className="product-images-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={title}
                className="image-sizes"
              />
            ))}
          </div>}</Col>
              </Row>
              <Row>
                <Col xs={6} md={6} lg={6}>{<div className="product-images-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={title}
                className="image-sizes"
              />
            ))}
          </div>}</Col>
              </Row>
            </Col>
            <Col xs={6} md={6} lg={6}>
                {<div className="product-images-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={title}
                className="product-image"
              />
            ))}
          </div>}
            </Col>
         </Row>
        </Col>
        <Col xs={12} md={6} lg={6} >
 <Card className="product-details-card">
            <Card.Body>
              <Card.Title>Price: ${price}</Card.Title>
              <Card.Text className="product-description">
                {description}
              </Card.Text>
              <div className="product-Devices-container">
                <h3>Devices:</h3>
                <ul className="product-Devices-list">
                  {Devices.map((size, index) => (
                    <li key={index} className="product-size-item">
                  <Badge variant="secondary" className="size-badge">
                        {size}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-reviews-container">
                <h3>Reviews:</h3>
                <ul className="product-reviews-list">
                  {reviews.map((review) => (
                    <li key={review.id} className="product-review-item">
                      <strong>{review.author}</strong>: {review.comment}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-bank-offers-container">
                <h3>Bank Offers:</h3>
                <ul className="product-bank-offers-list">
                  {bankOffers.map((offer) => (
                    <li key={offer.id} className="product-bank-offer-item">
                      {offer.bank}: {offer.offer}
                    </li>
                  ))}
                </ul>
              </div>
              <h3>Number of Purchases: {purchases}</h3>
              <Button variant="primary" className="add-to-cart-button">
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SeparateProduct;
