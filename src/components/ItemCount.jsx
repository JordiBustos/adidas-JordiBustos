import styled from "styled-components";

const ItemCount = ({ ammount, onAdd, onDecrease }) => {
	return (
		<ItemCountContainer>
			<ItemCountButtonDecrease
				onClick={() => {
					onDecrease();
				}}
			>
				-
			</ItemCountButtonDecrease>

			<ItemCountValue>{ammount}</ItemCountValue>
			<ItemCountButton
				onClick={() => {
					onAdd();
				}}
			>
				+
			</ItemCountButton>
			<AddToCartButton
				onClick={() => {
					console.log("Agregado");
				}}
			>
				{" "}
				Agregar al carrito{" "}
			</AddToCartButton>
		</ItemCountContainer>
	);
};

const ItemCountContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-flow: row wrap;
	width: 60%;
	padding: 0.5rem;
	border-radius: 0.5rem;
	background-color: #f5f5f5;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
	margin-top: 15%;
`;

const ItemCountButton = styled.button`
	background-color: white;
	border: none;
	color: black;
	font-size: 1.5rem;
	padding: 0.3rem 0.3rem;
	flex-basis: 10%;

	&:hover {
		color: #7c7c7c;
	}
`;
const ItemCountValue = styled.span`
	font-size: 1.2rem;
`;
const ItemCountButtonDecrease = styled.button`
	background-color: white;
	border: none;
	color: black;
	font-size: 1.6rem;
	padding: 0.3rem 0.3rem;
	flex-basis: 10%;
	&:hover {
		color: #7c7c7c;
	}
`;

const AddToCartButton = styled.button`
	flex-basis: 100%;
	margin-top: 1rem;
	height: 3rem;
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
	}
`;

export default ItemCount;
