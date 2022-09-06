import styled from "styled-components";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
	console.log(item);
	return (
		<Wrapper>
			{!item ? (
				<h2>Loading...</h2>
			) : (
				<>
					{Array.isArray(item.pictures) &&
					item.pictures.length > 2 ? (
						<>
							<TwoColumnImg src={item.pictures[0].url} />
							<OneColumnImg src={item.pictures[1].url} />
							<SecondToThirdColumnImg
								src={item.pictures[2].url}
							/>
						</>
					) : (
						<>
							<TwoColumnImg src={item.thumbnail} />
							<OneColumnImg src={item.thumbnail} />
							<SecondToThirdColumnImg src={item.thumbnail} />
						</>
					)}

					<InfoWrapper>
						<Type>{item.warranty}</Type>
						<Title>{item.title}</Title>
						<Price>${item.price}</Price>
					</InfoWrapper>

					<ExtraInfo>
						<AddToCartButton> Agregar al carrito </AddToCartButton>
						<Paragraph>
							PAY OVER TIME IN 4 INTEREST-FREE PAYMENTS & MORE
							FLEXIBLE OPTIONS WITH AFFIRM, KLARNA OR AFTERPAY
						</Paragraph>
						<Paragraph>
							JOIN ADICLUB TO GET UNLIMITED FREE STANDARD
							SHIPPING, RETURNS, & EXCHANGES
						</Paragraph>
						{Array.isArray(item.list) ? (
							<UlList>
								{item.list.map((item, index) => (
									<LiList key={index}>{item}</LiList>
								))}
							</UlList>
						) : (
							<></>
						)}
						<ItemCount
							stock={5}
							initial={1}
							onAdd={() => {
								console.log("add to cart");
							}}
						/>
						<Detail>{item.detail}</Detail>
					</ExtraInfo>
				</>
			)}
		</Wrapper>
	);
};
export default ItemDetail;

const UlList = styled.ul`
	list-style-type: disc;
	margin-top: 3rem;
	margin-bottom: 2rem;
`;

const LiList = styled.li`
	font-size: 16px;
	margin-top: 0.5rem;
`;

const ExtraInfo = styled.div`
	grid-column: 3 / 4;
	grid-row: 2 / span 1;
	margin-left: 1rem;
	margin-top: 0.5rem;
`;

const Paragraph = styled.p`
	font-size: 16px;
	color: black;
	text-decoration: underline;
`;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 40vh);
`;

const TwoColumnImg = styled.img`
	grid-column: 1 / 3;
	grid-row: 1 / span 2;
	width: 100%;
`;

const OneColumnImg = styled.img`
	width: 100%;
	grid-column: 1 / 2;
	grid-row: 3 / span 2;
`;

const SecondToThirdColumnImg = styled.img`
	width: 100%;
	grid-column: 2 / 3;
	grid-row: 3 / span 2;
`;

const InfoWrapper = styled.div`
	grid-column: 3 / 4;
	grid-row: 1 / span 1;

	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: space-around;

	margin-left: 1rem;
`;

const Title = styled.h1`
	font-size: 2rem;
	margin-top: 0;
`;

const Price = styled.p`
	font-size: 1.2rem;
	color: #e32b2b;
	margin-top: 0;
	margin-left: 1rem;
`;

const Type = styled.p`
	font-size: 1rem;
`;

const Detail = styled.p`
	font-size: 1rem;
	color: #666;
	padding: 1rem 1rem;
`;

const AddToCartButton = styled.button`
	width: 50%;
	height: 3rem;
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
	}
`;
