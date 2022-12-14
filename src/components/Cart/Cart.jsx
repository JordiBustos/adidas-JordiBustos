import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";

const Cart = () => {
	const { cart, removeItem } = useContext(CartContext);
	const [itemsOrder, setItemsOrder] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let totalTmp = 0;
		for (let i = 0; i < cart.length; i++) {
			totalTmp += parseFloat(cart[i].price) * parseInt(cart[i].quantity);
		}
		setTotal(totalTmp);

		const itemsOrderTmp = cart.map((item) => {
			return {
				id: item.id,
				title: item.title,
				price: item.price,
				quantity: item.quantity,
			};
		});
		setItemsOrder(itemsOrderTmp);
	}, [cart]);

	return (
		<>
			{cart?.length > 0 ? (
				<>
					<Wrapper>
						{cart.map((item) => (
							<WrapperItem key={item.id}>
								<Link to={`/item/${item.id}`}>
									<h2>{item.title}</h2>
								</Link>
								<p>${item.price * parseInt(item.quantity)}</p>
								<p>Quantity: {parseInt(item.quantity)}</p>
								<img src={item.image} alt={item.title} />
								<Remove
									onClick={() => {
										removeItem(item.id);
									}}
								>
									{" "}
									<i className="gg-remove"></i>
								</Remove>
							</WrapperItem>
						))}
						<p className="total">Total: ${total}</p>
					</Wrapper>
					<ContactForm items={itemsOrder} total={total} />
				</>
			) : (
				<>
					<WrapperEmpty>
						<Title>Cart is empty</Title>
						<Link to="/">
							<CallToAction>Shop!</CallToAction>
						</Link>
					</WrapperEmpty>
				</>
			)}
		</>
	);
};

const WrapperEmpty = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 100%;
	width: 100%;
	background-color: #fff;
	border-radius: 10px;
	padding: 20px;
`;

const Title = styled.h1`
	font-size: 2rem;
	text-align: center;
	margin: 1rem;
`;

const CallToAction = styled.button`
	font-size: 1.7rem;
	text-align: center;
	padding: 1.1rem;
	border-radius: 5px;
	border: none;
	background-color: #cecece;
	cursor: pointer;
	&:hover {
		background-color: #e0e0e0;
	}
`;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto;
	width: 80%;

	img {
		width: 20%;
	}
	a {
		text-decoration: underline;
		color: black;
	}
	a:hover {
		color: #e32b2b;
	}
	.total {
		grid-column: 4/5;
		font-weight: bold;
		font-size: 1.2rem;
	}
`;

const Remove = styled.button`
	background: none;
	border: none;
	cursor: pointer;
`;

const WrapperItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	border: 1px solid black;
	margin: 1rem;
	padding: 1rem;
	grid-column: 2 / span 4;
	border-radius: 5px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default Cart;
