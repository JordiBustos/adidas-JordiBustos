import ItemCount from "../components/ItemCount";
const itemListContainer = () => {
	return (
		<ItemCount
			stock={5}
			initial={1}
		/>
	);
};

export default itemListContainer;
