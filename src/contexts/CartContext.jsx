import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartLength, setCartLength] = useState(0);

	function isInCart(id) {
		return cart.some((item) => item.id === id);
	}

	function addItem(item, quantity) {
    if (isInCart(item.id)) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id && item.available_quantity > cartItem.quantity
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  }

	function removeItem(itemId) {
		setCart(cart.filter((item) => item.id !== itemId));
		setCartLength(cartLength - parseInt(cart.find((item) => item.id === itemId).quantity));
	}

	function clear() {
		setCart([]);
	}

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, clear, cartLength, setCartLength}}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
