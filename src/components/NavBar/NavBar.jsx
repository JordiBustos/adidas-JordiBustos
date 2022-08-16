import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const Navbar = () => {
	return (
		<Header>
			<Wrapper>
				<nav>
					<NavUl>
						<NavLi>
							<NavLink href="/">
								<svg
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M50.0701 39.7718L31.9254 8.33325L22.2068 13.9395L37.112 39.7718H50.0701ZM32.7817 39.7719L20.7971 19.0254L11.0785 24.6317L19.8235 39.7719H32.7817ZM9.71859 29.7344L15.5095 39.7719H2.55134L0 35.3406L9.71859 29.7344Z"
										fill="black"
									/>
								</svg>
							</NavLink>
						</NavLi>
						<Links>
							<NavLi>
								<NavLink href="/">Men</NavLink>
							</NavLi>
							<NavLi>
								<NavLink href="/">Women</NavLink>
							</NavLi>
							<NavLi>
								<NavLink href="/">Shop</NavLink>
							</NavLi>
						</Links>
						<Contenedor>
							<NavLi>
								<NavLinkIcon href="/">
									<FontAwesomeIcon
										icon={faShoppingCart}
										fontSize="25px"
									/>
								</NavLinkIcon>
								<CartValue>
									0
								</CartValue>
							</NavLi>
						</Contenedor>
					</NavUl>
				</nav>
			</Wrapper>
		</Header>
	);
};


const Header = styled.div`
	background-color: white;
`;

const Wrapper = styled.header`
	padding: 2rem 0 0 0;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	border-bottom: 3px solid black;

	@media (min-width: 768px) {
		max-height:6rem;
	}
`;

const NavUl = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: flex-start;
`;


const NavLi = styled.li`
	flex-basis: 10%;
	text-align: center;
	margin-bottom: 0.5rem;

	&:last-child {
		flex-basis: 15%;

		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: flex-start;
	}

	&:first-child {
		margin-left: 0;
		flex-basis: 5%;
	}
`;

const NavLink = styled.a`
	text-decoration: none;
	font-size: 16px;
	text-transform: uppercase;
	line-height: 45px;
	letter-spacing: 1.87px;
	font-family: "Roboto", Helvetica, Arial, sans-serif;
	font-weight: 700;
	color: black;
	display: block;
	text-align: center;
	border-radius: 5px;
	padding: 0.5rem;
`;

const Links = styled.div`
	flex-basis: 50%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	
	${NavLink}:hover {
		text-decoration: 2px underline black;
	}
	${NavLink} {
		width:90%;
	}

	${NavLi} {
		flex-basis:12%;
	}

	@media (max-width:500px) {
		flex-basis:55%;
	}
`

const Contenedor = styled.div`
	position: relative;
`

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
	padding-left: .5px;
	color: white;
	opacity: 0.9;
	font-family: "Roboto", Arial, Helvetica, sans-serif;
	transition:0.2s;

	display:none;
`

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
	padding-top:1rem;
	color:black;
`;

export default Navbar;
