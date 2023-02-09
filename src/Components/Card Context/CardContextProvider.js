import React, { useState, createContext } from "react";

const CartContext = createContext();
const CardContextProvider = ({ children }) => {
  const [cartElements, setCartElements] = useState([]);

  const addToCart = (item) => {
console.log(item)
    const itemIndex = cartElements.findIndex((i) => i.title === item.title);
    if (itemIndex === -1) {
      setCartElements([...cartElements, { ...item, quantity: 1 }]);
    } else {
      const updatedCartItem = [...cartElements];
      updatedCartItem[itemIndex].quantity++;
      setCartElements(updatedCartItem);
    }

  };

  return (
    <CartContext.Provider
      value={{
        cartElements,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CardContextProvider;
export { CartContext };
