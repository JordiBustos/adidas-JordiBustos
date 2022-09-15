import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

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
		setCart(cart.filter((item) => item.item.id !== itemId));
	}

	function clear() {
		setCart([]);
	}

	return (
		<CartContext.Provider value={{ addItem, removeItem, clear }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
