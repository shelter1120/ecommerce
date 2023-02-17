import React, { useState, createContext } from "react";

const CartContext = createContext();

const CardContextProvider = ({ children }) => {
  const [cartElements, setCartElements] = useState([]);

  const addToCart = (item) => {
    console.log(item);
    const itemIndex = cartElements.findIndex((i) => i.title === item.title);
    if (itemIndex === -1) {
      setCartElements([...cartElements, { ...item, quantity: 1 }]);
    } else {
      const updatedCartItem = [...cartElements];
      updatedCartItem[itemIndex].quantity++;
      setCartElements(updatedCartItem);
    }
  };

  // for auth
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const isUserLogin = !!token;

  const loginHandler = (token) => {
    console.log("ji", token);
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggin: isUserLogin,
    login: loginHandler,
    logOut: logOutHandler,
  };

  return (
    <CartContext.Provider
      value={{
        cartElements,
        addToCart,
        contextValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CardContextProvider;
export { CartContext };
