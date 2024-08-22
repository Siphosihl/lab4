import React, { createContext, useState } from 'react';

export const FormContext = createContext();
export const ThemeContext = createContext();
export const CartContext = createContext();


export const ContextProvider = ({ children }) => {
 
  const [formData, setFormData] = useState({
    name: '',
    address: '',
  });


  const [theme, setTheme] = useState({
    textColor: '#000',
    backgroundColor: '#fff',
  });

  
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };
  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
          {children}
        </CartContext.Provider>
      </ThemeContext.Provider>
    </FormContext.Provider>
  );
};


