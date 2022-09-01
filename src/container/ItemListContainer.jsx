import { useEffect, useState } from "react";
import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";


const ItemListContainer = () => {
	const [items, setItems] = useState([])
	useEffect(() => {
		requestItems();
	}, [])
	
	async function requestItems() {
		const res = await fetch(
			`https://api.mercadolibre.com/sites/MLA/search?q=Adidas`
		);
		if (res.ok) {
			const json = await res.json();
			setItems(json.results);
		} else {
			console.log("Error");
		}
	}



	return (
		<>
		<ItemCount
			stock={5}
			initial={1}
			onAdd={() => {console.log('add to cart')}}
		/>

		<ItemList items={items}/>
		
		</>
	);
};




export default ItemListContainer;
