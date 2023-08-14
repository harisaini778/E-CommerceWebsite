import React, { useState } from "react";
import { createContext } from "react";
import axios from "axios";


export const CartContext = createContext({
  cartData: [],
  cartToggle: false,
  token: "",
  userEmail: "",
  username : "",
  loginHandler: (token) => {},
  logoutHandler: () => {},
  addToCart: (item) => {},
  removeFromCart: (title) => {},
  cartDisplayHandler: () => {},
  handleCartClose: () => { },
  setCartData: () => {},
});

const CartContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [token, setToken] = useState("");

  const [cartToggle, setCartToggle] = useState(false);


  const cartDisplayHandler = () => {
    setCartToggle(!cartToggle);
  };

  const userEmail = localStorage.getItem("email");

  const extractUsernameFromEmail = (userEmail) => {
  // Split the email at the "@" symbol
  const parts = userEmail.split("@");
  
  // The username is the first part
  const username = parts[0];
  
  return username;
};

const username = extractUsernameFromEmail(userEmail);
  
console.log(username); // Output: "example"
 
  const url = `https://crudcrud.com/api/452ad418acd94026b96f4596a692ba42/${username}`;

const addToCart = (item) => {
  const existingProduct = cartData.find((existingItem) => existingItem.title === item.title);
  
  console.log("Existing product:", existingProduct);

  axios.post(url, { product: item }, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    console.log('post request response is:', response.data);
    if (existingProduct) {
      // Update existing item's quantity
      setCartData((prevCartData) =>
        prevCartData.map((existingItem) =>
          existingItem.title === item.title
            ? { ...existingItem, quantity: existingItem.quantity + 1 }
            : existingItem
        )
      );
    } else {
      // Add new item to the cart
      setCartData((prevCartData) => [...prevCartData, { ...item, quantity: 1, imageUrl: item.imageUrl }]);
    }
  })
  .catch(error => {
    console.log('error in the post request:', error);
    // Handle error as needed
  });
};



  const loginHandler = (token) => {
    setToken(token);
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  };

  const responseToken = localStorage.getItem("token");
  const responseUserName = localStorage.getItem("username");
  const responseUserEmail = localStorage.getItem("email");

  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("token");
  };

    const removeFromCart = (title) => {
    setCartData((prevCartData) => {
      const updatedCartData = prevCartData.filter((item) => item.title !== title);
      return updatedCartData;
    });
  };

  const handleCartClose = () => {
    setCartToggle(!cartToggle);
  }

  const contextValue = {
    cartData: cartData,
    cartToggle: cartToggle,
    token: responseToken || token,
    userEmail: responseUserEmail || userEmail,
    username : responseUserName || username,
    loginHandler,
    logoutHandler,
    addToCart,
    removeFromCart,
    cartDisplayHandler,
    handleCartClose,
    setCartData,
  };

  console.log("context value is : " + JSON.stringify(contextValue));

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;