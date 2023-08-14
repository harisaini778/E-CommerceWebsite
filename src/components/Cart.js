import React, { useContext,useEffect} from "react";
import { Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Cart.css";
import { CartContext } from "./CartContextProvider";
import axios from "axios";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetchCartItems();
  }, []);

// const fetchCartItems = () => {
//   axios
//     .get(`https://crudcrud.com/api/452ad418acd94026b96f4596a692ba42/${username}`)
//     .then(response => {
//       if (!response.data) {
//         throw new Error("Network response was not ok");
//       }

//       // Extract product data from response and update cart data
//       const cartItems = response.data.map(item => item.product);
//       cartCtx.setCartData(cartItems);
//     })
//     .catch(error => {
//       console.error("Error fetching cart items:", error);
//     });
// };
  const fetchCartItems = () => {
  axios
    .get(`https://crudcrud.com/api/452ad418acd94026b96f4596a692ba42/${username}`)
    .then(response => {
      if (!response.data) {
        throw new Error("Network response was not ok");
      }

      // Consolidate cart items with the same title
      const cartItemsMap = new Map();
      response.data.forEach(item => {
        const product = item.product;
        if (cartItemsMap.has(product.title)) {
          cartItemsMap.get(product.title).quantity += 1;
        } else {
          cartItemsMap.set(product.title, { ...product, quantity: 1 });
        }
      });

      // Convert map values to an array of cart items
      const cartItems = Array.from(cartItemsMap.values());
      cartCtx.setCartData(cartItems);
    })
    .catch(error => {
      console.error("Error fetching cart items:", error);
    });
};




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

    const totalPrice = cartCtx.cartData.reduce(
    (total, item) => total + item.price * item.quantity, // Multiply price by quantity
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
          <h4 className="total-price">Total Price: ${totalPrice}</h4>
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