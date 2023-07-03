import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import CartContextProvider from "./components/CartContextProvider";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
             <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Store" element={<Products />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
