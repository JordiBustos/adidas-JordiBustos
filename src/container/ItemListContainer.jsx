import { useContext, useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { CacheContext } from "../contexts/CacheContext";

const ItemListContainer = ({ category }) => {
	const [items, setItems] = useState([]);
	const { cache, addToCache } = useContext(CacheContext);

	useEffect(() => {
		requestItems();
	}, [category]);

	function filterByGender() {
		let filteredItems = [];
		let filterCriteria;
		category === "women"
			? (filterCriteria = "Mujer")
			: (filterCriteria = "Hombre");

		items.forEach(async (item) => {
			const res = await fetch(
				`https://api.mercadolibre.com/items/${item.id}`
			);
			if (res.ok) {
				const resJSON = await res.json();
				resJSON.attributes.forEach((attribute) => {
					if (
						attribute.id === "GENDER" &&
						attribute.value_name === filterCriteria
					) {
						filteredItems.push(item);
						setItems([...filteredItems]);
					}
				});
			}
		});
	}

	async function requestItems() {
		if (cache.length === 0) {
			console.log("cache vacio");
			const res = await fetch(
				`https://api.mercadolibre.com/sites/MLA/search?q=Adidas`
			);
			if (res.ok) {
				const json = await res.json();

				addToCache(json.results);
				setItems(json.results);
			} else {
				console.log("Error");
			}
		} else {
			if (category === "shop" || category === undefined) {
				setItems(cache);
			} else {
				filterByGender();
			}
		}
	}

	return <ItemList items={items} />;
};

export default ItemListContainer;
