import styled from "styled-components";
import "./styles.css";

import ItemListContainer from "../../container/ItemListContainer";
import { Link, useParams } from "react-router-dom";
import { CacheContext } from "../../contexts/CacheContext";
import { useContext } from "react";

const LandingBanner = () => {
	// SHOP -> ALL
	// MEN -> FILTER BY GENDER: MEN
	// WOMEN -> FILTER BYGENDER: WOMEN
	const { id } = useParams();
	const { idForm } = useContext(CacheContext);
	return (
		<>
			{idForm === null ? (
				<Container>
					<Wrapper>
						<figure className="gallery__item--1">
							<img
								className="gallery__img--1"
								src={require("./img/shoe-banner.webp")}
								alt="Shoe"
							/>
							<figcaption className="title">
								<Link to="/">
									<button className="titleLink">
										{" "}
										BUY MORE, SAVE MORE{" "}
									</button>
									<button className="callToAction">
										Shop now
									</button>
								</Link>
							</figcaption>
						</figure>
						<div className="gallery__line--1"></div>
						<figure className="gallery__item--2">
							<img
								className="gallery__img--2"
								src={require("./img/womens.webp")}
								alt="Two womens wearing adidas clothes"
							/>
						</figure>
						<figure className="gallery__item--3">
							<img
								className="gallery__img--3"
								src={require("./img/2.jpg")}
								alt="Woman wearing adidas clothes"
							/>
						</figure>
					</Wrapper>
				</Container>
			) : (
				<>
				<ThanksMessage>Thanks, your id buy is: <span>{idForm}</span></ThanksMessage>
				<Continue>Continue Shopping?</Continue>
				</>
			)}
			<ItemListContainer category={id} />
		</>
	);
};

const Container = styled.section`
	width: 100%;
`;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 33.3vh);

	border-bottom: 3px solid black;
	margin-bottom: 3rem;
`;

const ThanksMessage = styled.h1`
	text-align: center;
	width: 50%;
	margin: 3rem auto;
	span {
		color: #e32b2b;
	}
	border-bottom: 3px solid black;
	border-left: 3px solid black;
	border-right: 3px solid black;
	padding-bottom:2rem;
`;

const Continue = styled.h2`
	text-align: left;
	font-size:2rem;
	margin-left: 3rem;
`
export default LandingBanner;
