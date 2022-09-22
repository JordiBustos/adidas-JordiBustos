import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const { id } = useParams();

	useEffect(() => {
		requestItem();
	}, [id]);

	const requestItem = () => {
		const db = getFirestore();
		const itemRef = doc(db, "items", id);
		getDoc(itemRef).then((snapshot) => {
			if (snapshot.exists()) {
				const newProduct = {
					id: snapshot.id,
					...snapshot.data(),
				};
				setItem(newProduct);
			}
		});
	};
	return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
