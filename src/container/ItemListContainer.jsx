import { useEffect, useState } from "react";
import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";

const ItemListContainer = ({ category }) => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		requestItems();
	}, [category]);

	function filterByGender(category, items) {
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
		const res = await fetch(
			`https://api.mercadolibre.com/sites/MLA/search?q=Adidas`
		);
		if (res.ok) {
			const json = await res.json();
			category === "shop" || category === undefined
				? setItems(json.results)
				: filterByGender(category, json.results);
		} else {
			console.log("Error");
		}
	}

	return <ItemList items={items} />;
};

export default ItemListContainer;
