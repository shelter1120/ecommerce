import React, { useContext, useState } from "react";
import {CartContext} from '../Card Context/CardContextProvider'

const Cart = () => {

  const [showCart, setShowCart] = useState(false);

//  const {cartElements} = useContext(CartContext);
const {cartElements} = useContext(CartContext);

  console.log(cartElements)
  const handleCartButtonClick = () => {
    setShowCart(!showCart); //toggle
    console.log(cartElements)
  };


  return (

    <div style={{ position: "fixed", top: 0, right: 0 }}>
      <button onClick={handleCartButtonClick}>Show  Cart</button>
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
  <ul>
            <div key={index} style={{ margin: "10px 0" }}>
             <li>item: {item.title}</li>
             <li>price : {item.price}</li>
             <li>quantity :{item.quantity}</li>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ maxWidth: "100px", height: "auto" }}
              />
              <button style={{margin : '10px 0', border:'3px solid pink ', right:0}}>Remove</button>
            </div>
            </ul>
          ))}
        </div>
      )} 
    </div>  
    );
};

  

export default Cart
