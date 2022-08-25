import styled from "styled-components";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [ammount, setAmmount] = useState(initial);
	onAdd();
	return (
		<ItemCountContainer>
			<ItemCountButtonDecrease
				onClick={() => {
					if (ammount === `${stock} (max)`) {
						setAmmount(stock - 1);
					} else {
						if (ammount - 1 > 0) {
							setAmmount(ammount - 1);
						}
					}
				}}
			>
				-
			</ItemCountButtonDecrease>

			<ItemCountValue>{ammount}</ItemCountValue>
			<ItemCountButton
				onClick={() => {
					if (ammount + 1 < stock) {
						setAmmount(ammount + 1);
					} else {
						if (ammount + 1 === stock) {
							setAmmount(`${ammount + 1} (max)`);
						}
					}
				}}
			>
				+
			</ItemCountButton>
			<ItemButtonAddCart>Add to cart</ItemButtonAddCart>
		</ItemCountContainer>
	);
};

const ItemCountContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-flow: row wrap;
	width: 15%;
	padding: 0.5rem;
	border-radius: 0.5rem;
	background-color: #f5f5f5;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
	margin-top: 5%;
	margin-left: 10%;
`;
const ItemCountButton = styled.button`
	background-color: black;
	border: none;
	color: white;
	font-size: 1.2rem;
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
	background-color: black;
	border: none;
	color: white;
	font-size: 1.2rem;
	padding: 0.3rem 0.3rem;
	flex-basis: 10%;
	&:hover {
		color: #7c7c7c;
	}
`;
const ItemButtonAddCart = styled.button`
	background-color: black;
	border: none;
	color: white;
	font-size: 1.2rem;
	padding: 0.3rem 0.3rem;
	flex-basis: 100%;
	margin-top: 1rem;

	&:hover {
		color: #7c7c7c;
	}
`;

export default ItemCount;
