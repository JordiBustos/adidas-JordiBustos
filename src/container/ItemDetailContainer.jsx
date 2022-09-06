import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	useEffect(() => {
		requestItem();
	}, []);

	const { id } = useParams();

	async function requestItem() {
		const res = await fetch(`https://api.mercadolibre.com/items/${id}`);

		if (res.ok) {
			const json = await res.json();
			setItem(json);
		} else {
			console.log("Something went wrong while fetching item...");
		}
	}
	return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
