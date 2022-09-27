import { useContext, useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { CacheContext } from "../contexts/CacheContext";
import {
	getFirestore,
	collection,
	getDocs,
	where,
	query,
} from "firebase/firestore";

const ItemListContainer = ({ category }) => {
	const [items, setItems] = useState([]);
	const { cache, addToCache } = useContext(CacheContext);

	useEffect(() => {
		requestItemsFirebase();
	}, [category]);

	function filterByGender() {
		let filteredItems = [];

		const q = query(
			collection(getFirestore(), "items"),
			where("categoryId", "==", category)
		);
		getDocs(q).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				filteredItems.push({ id: doc.id, ...doc.data() });
			});
			setItems(filteredItems);
		});
	}

	function requestItemsFirebase() {
		if (cache.length === 0) {
			const db = getFirestore();
			const items = collection(db, "items");
			getDocs(items).then((snapshot) => {
				if (!snapshot.empty) {
					const products = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));
					setItems(products);
					addToCache(products);
				}
			});
		} else {
			if (category === "shop" || category === undefined) {
				// If category is undefined, it means that the user is in the home page
				// and we want to show all the products
				// If category is shop, it means that the user is in the shop page it's like the home because it's not implemented yet
				setItems(cache);
			} else {
				// If category is not undefined, it means that the user is in a category page
				// We query the db to get the products that match the category and we save the client from doing the filtering in its browser
				filterByGender();
			}
		}
	}

	return <ItemList items={items} />;
};

export default ItemListContainer;
