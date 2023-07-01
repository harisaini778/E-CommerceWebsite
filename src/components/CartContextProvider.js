import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
