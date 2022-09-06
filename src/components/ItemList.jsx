import Item from "./Item";
import styled from "styled-components";

const ItemList = ({ items }) => {
	return (
		<Wrapper>
			{!items.length ? (
				<h2>No items found</h2>
			) : (
				items.map((item) => <Item key={item.id} {...item} />)
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	gap: 4px;
	padding: 0 5% 0 5%;
	poisition: relative;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		grid-template-rows: auto;
	}

	@media (min-width: 769px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export default ItemList;
