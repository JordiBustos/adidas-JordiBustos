import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import ItemDetailContainer from "./container/ItemDetailContainer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar cartValueNavBar={0} />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/category/:id" element={<Landing />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
