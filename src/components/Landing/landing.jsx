import styled from 'styled-components';
import './styles.css'

const landingBanner = () => {
    // Imagenes de prueba falta ver responsive
    // Probablemente se solicitaran a la base de datos
    return (
        <Container>
            <Wrapper> 
            <figure className="gallery__item--1">
                <img className="gallery__img--1" src={require("./img/shoe-banner.webp")} alt="Shoe" />
                <figcaption className="title">
                    <a className="titleLink" href="/"> BUY MORE, SAVE MORE </a> <a className="callToAction" href="/">Shop now</a> 
                </figcaption>
            </figure>
            <div className="gallery__line--1"></div>
            <figure className="gallery__item--2">
                <img className="gallery__img--2" src={require("./img/womens.webp")} alt="Two womens wearing adidas clothes" />
            </figure>
            <figure className="gallery__item--3">
                <img className="gallery__img--3" src={require("./img/2.jpg")} alt="Woman wearing adidas clothes" />
            </figure>
            </Wrapper>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
`

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 33.3vh);

    border-bottom: 3px solid black;
    margin-bottom: 3rem;
`

export default landingBanner;