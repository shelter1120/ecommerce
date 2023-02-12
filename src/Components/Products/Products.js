import React from "react";
import "../Products/Products.css";
import { useContext } from "react";

import { CartContext } from "../Card Context/CardContextProvider";
import { NavLink } from "react-router-dom";
const Products = (props) => {
  const { addToCart } = useContext(CartContext);

  console.log(props);
  return (
    <div className="products">
      {props.products.map((item) => {
        // console.log(item)
        return (
        
          <div className="product-container">
            <h2>{item.album}</h2>
            <NavLink to='/productpage'>
              <div onClick={props.cartElement(item)}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="product-image"
            />
            </div>
            </NavLink>
            <div className="product-title">{item.title}</div>
            <div className="product-price">Price: ${item.price}</div>
            <button
              className="product-addToCart"
              onClick={() => addToCart(item)}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
