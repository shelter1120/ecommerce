import React, { useState } from "react";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartElements] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const handleCartButtonClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div style={{ position: "fixed", top: 0, right: 0 }}>
      <button onClick={handleCartButtonClick}>Add to Cart</button>
      {showCart && (
        <div
          style={{
            background: "white",
            border: "1px solid black",
            padding: "10px",
            maxHeight: "50vh",
            overflowY: "auto",
          }}
        >
          {cartElements.map((item, index) => (
            <div key={index} style={{ margin: "10px 0" }}>
              <p> title: {item.title}</p>
              <p> price : {item.price}</p>
              <p> quantity :{item.quantity}</p>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ maxWidth: "100px", height: "auto" }}
              />
              <button style={{margin : '10px 0', border:'3px solid pink ', right:0}}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
