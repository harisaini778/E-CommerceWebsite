import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Products.css";

const Products = () => {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  return (
    <div>
      {productsArr.map((item, index) => (
        <div className="product-container" key={index}>
          <Row>
                  <Col xs={6}>{item.title} {item.price}</Col>
                   <Col xs={6}>
              <img src={item.imageUrl} alt={item.title}/>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Products;
