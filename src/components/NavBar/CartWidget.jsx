import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CartWidget = ({ cartValue }) => {
	return (
		<>
			<NavLinkIcon href="/">
				<FontAwesomeIcon icon={faShoppingCart} fontSize="25px" />
			</NavLinkIcon>
			<CartValue>{cartValue}</CartValue>
		</>
	);
};

const CartValue = styled.span`
	font-size: 12px;
	font-weight: 900;
	position: absolute;
	border: solid #0071ae;
	border-radius: 50%;
	height: 20px;
	width: 20px;
	background: #0071ae;
	left: 18px;
	bottom: 24px !important;
	padding-top: 1px;
	padding-left: 0.5px;
	color: white;
	opacity: 0.9;
	font-family: "Roboto", Arial, Helvetica, sans-serif;
	transition: 0.2s;

	display: none;
`;

const NavLinkIcon = styled.a`
	&:hover {
		transform: scale(1.1);
	}
	&:hover + ${CartValue} {
		transform: scale(1.2);
		padding-top: 0.5px;
	}

	transition: 0.2s;
	flex-basis: 10%;
	text-align: center;
	padding-top: 1rem;
	color: black;
`;

export default CartWidget;
