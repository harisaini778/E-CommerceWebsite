import React, { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext({
  cartData: [],
  cartToggle: false,
  token: "",
  loginHandler: (token) => {},
  logoutHandler: () => {},
  addToCart: (item) => {},
  removeFromCart: (title) => {},
  cartDisplayHandler: () => {},
  handleCartClose: () => {},
});

const CartContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [token, setToken] = useState("");

  const [cartToggle, setCartToggle] = useState(false);


  const cartDisplayHandler = () => {
    setCartToggle(!cartToggle);
  };

const addToCart = (item) => {
  setCartData((prevCartData) => {
    const existingProduct = prevCartData.find(
      (existingItem) => existingItem.title === item.title
    );
    if (existingProduct) {
      return prevCartData.map((existingItem) =>
        existingItem.title === item.title
          ? { ...existingItem, quantity: existingItem.quantity + 1 }
          : existingItem
      );
    } else {
      return [...prevCartData, { ...item, quantity: 1, imageUrl: item.imageUrl }];
    }
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
    loginHandler,
    logoutHandler,
    addToCart,
    removeFromCart,
    cartDisplayHandler,
    handleCartClose,
  };

  console.log("context value is : " + JSON.stringify(contextValue));

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
