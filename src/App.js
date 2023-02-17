import React, { useContext,useState } from "react";

import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Components/Header/Cart";
import  { CartContext} from "./Components/Card Context/CardContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import ProductPage from "./Components/Products/ProductPage";
import Login from "./Components/Login/Login";

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
  async function contactHanlder(contact) {
    const response = await fetch(
      "https://react-http-1fabf-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application.json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  const [data, setData] = useState([]);

  const addToZoom = (d) => {
    console.log();
    // setData([d]);
  };

  const authctx = useContext(CartContext);
  console.log(authctx);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Cart />
        <Routes>
          {authctx.contextValue.isLoggin && (
            <Route
              path="/"
              element={<Products products={products} cartElement={addToZoom} />}
            />
          )}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Contact onAddContact={contactHanlder} />}
          />
          <Route path="/productpage" element={<ProductPage item={data} />} />
          {!authctx.contextValue.isLoggin && <Route path="/login" element={<Login />} />}


        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
