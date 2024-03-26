import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [counter, setCounter] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setCounter(counter + 1); // Increment counter on each add to cart
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, counter }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
