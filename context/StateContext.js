import React, { useContext, createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find(item => item._id === id);
    index = cartItems.findIndex(product => product._id === id);
    const newCartItems = cartItems.filter(item => item._id !== id);
    const newSortedCartItems1 = [...newCartItems.slice(0, index),
    { ...foundProduct, quantity: foundProduct.quantity + 1 },
    ...newCartItems.slice(index)
    ]
    const newSortedCartItems2 = [...newCartItems.slice(0, index),
    { ...foundProduct, quantity: foundProduct.quantity - 1 },
    ...newCartItems.slice(index)
    ]

    if (value === 'inc') {
      setCartItems(newSortedCartItems1);
      setTotalPrice(prev => prev + foundProduct.price);
      setTotalQuantities(prev => prev + 1)
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems(newSortedCartItems2);
        setTotalPrice(prev => prev - foundProduct.price);
        setTotalQuantities(prev => prev - 1)
      }
    }
  }

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(item => item._id === product._id);

    setTotalPrice(prev => prev + product.price * quantity);
    setTotalQuantities(prev => prev + quantity);

    if (checkProductInCart) {
      const updatedCartItem = cartItems.map(cartProduct => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })
      setCartItems(updatedCartItem);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);

  }

  const incQty = () => {
    setQty(prev => prev + 1);
  }

  const decQty = () => {
    setQty(prev => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);