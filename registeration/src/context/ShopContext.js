import { createContext, useState } from 'react';
import All_product from '../components/All_product';

export const ShopContext = createContext(null);

const defaultCart = () => {
  const cart = {};
  for (let index = 0; index < All_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  // const [All_product, setAll_product] = useState(All_product);
  const [cartItems, setCartItems] = useState(defaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1
     
    }));
    console.log('cartItems',cartItems)
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1
    }));
  };

  const contextValue = { All_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
