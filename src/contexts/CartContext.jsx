import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartLength, setCartLength] = useState(0);

	function isInCart(id) {
		return cart.some((item) => item.id === id);
	}

	function updateItemQuantity(id, quantity) {
		const newCart = cart.map((item) => {
			if (item.id === id) {
				const prevQuantity = item.quantity;
				return { ...item, quantity: prevQuantity + quantity };
			}
			return item;
		});
		setCart(newCart);
	}

	function addItem(item, quantity) {
    if (isInCart(item.id)) {
      updateItemQuantity(item.id, quantity);
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
		<CartContext.Provider value={{ cart, addItem, removeItem, clear, cartLength, setCartLength, updateItemQuantity}}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
