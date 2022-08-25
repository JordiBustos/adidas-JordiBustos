import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";

const itemListContainer = () => {
	return (
		<>
		<ItemCount
			stock={5}
			initial={1}
			onAdd={() => {console.log('add')}}
		/>
		<ItemList />
		</>
	);
};




export default itemListContainer;
