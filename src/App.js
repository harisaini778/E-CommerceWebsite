import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import CartContextProvider from "./components/CartContextProvider";

import './App.css';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Header />
        <Products />
      </CartContextProvider>
    </div>
  );
}

export default App;
