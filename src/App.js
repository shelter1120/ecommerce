import React from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Components/Header/Cart";
import CardContextProvider from "./Components/Card Context/CardContextProvider";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";

const products = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    album: "Albums1",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    album: "Albums2",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    album: "Albums3",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    album: "Albums4",
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <CardContextProvider>
        <div>
          <Header />
          <Cart />
          <Routes>
            {/* <Route
              path="/"
              element={<Products path="/" products={products} />}
            ></Route> */}
            <Route path="/home" element={<Products path="/" products={products} />}></Route>
           </Routes>
        </div>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </CardContextProvider>
    </BrowserRouter>
  );
};

export default App;
