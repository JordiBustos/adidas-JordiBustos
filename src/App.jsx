import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import ItemDetailContainer from "./container/ItemDetailContainer";
import { CartProvider  } from "./contexts/CartContext";
import { CacheProvider } from "./contexts/CacheContext";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<div className="App">
			<CartProvider>
			<CacheProvider>
				<BrowserRouter>
					<Navbar cartValueNavBar={0} />
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/category/:id" element={<Landing />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</BrowserRouter>
				</CacheProvider>
			</CartProvider>
		</div>
	);
}

export default App;
