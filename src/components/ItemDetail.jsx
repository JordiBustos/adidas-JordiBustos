import styled from 'styled-components';

const ItemDetail = (item) => {
  const data = item.item;
  return (
    <Wrapper>
    {!Array.isArray(data.img) ? (
        <h2>Loading...</h2>
      ) : (
        <>
        <TwoColumnImg src={data.img[0]} alt={data.title} />
        <OneColumnImg src={data.img[1]} alt={data.title} />
        <SecondToThirdColumnImg src={data.img[2]} alt={data.title} />           
        <InfoWrapper>
          <Type>{data.type}</Type>
          <Title>{data.title}</Title>
          <Price>${data.price}</Price>
        </InfoWrapper>
        
        <ExtraInfo>
          <AddToCartButton> Agregar al carrito </AddToCartButton>
          <Paragraph>
            PAY OVER TIME IN 4 INTEREST-FREE PAYMENTS & MORE FLEXIBLE OPTIONS WITH AFFIRM, KLARNA OR AFTERPAY
          </Paragraph>
          <Paragraph>
            JOIN ADICLUB TO GET UNLIMITED FREE STANDARD SHIPPING, RETURNS, & EXCHANGES
          </Paragraph>
          {Array.isArray(data.list) ? (
            <UlList>
              {data.list.map((item, index) => (
                <LiList key={index}>{item}</LiList>
              ))
              }
            </UlList>
          ) : (
            <>
            </>
          )}
          <Detail>{data.detail}</Detail>
        </ExtraInfo>

        </>
      )
      }
    </Wrapper>
    )     
}
export default ItemDetail;

const UlList = styled.ul`
  list-style-type: disc;
  margin-top:3rem;
  margin-bottom:2rem;
`

const LiList = styled.li`
  font-size:16px;
  margin-top:.5rem;
`

const ExtraInfo = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / span 1;
  margin-left: 1rem;
  margin-top: .5rem;
`

const Paragraph = styled.p`
  font-size: 16px;
  color: black;
  text-decoration: underline;

`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 40vh);
`

const TwoColumnImg = styled.img`
  grid-column: 1 / 3;
  grid-row: 1 / span 2;
  width:100%;
`

const OneColumnImg = styled.img`
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 3 / span 2;
`

const SecondToThirdColumnImg = styled.img`
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 3 / span 2;
`

const InfoWrapper = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / span 1;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;

  margin-left: 1rem;
`

const Title = styled.h1`
  font-size: 4rem;
  margin-top:0;
`

const Price = styled.p`
  font-size:1.2rem;
  color: #e32b2b;
  margin-top:0;
  margin-left:1rem;
`

const Type = styled.p`
  font-size:1rem;
`

const Detail = styled.p`
  font-size:1rem;
  color: #666;
  padding:1rem 1rem;
`

const AddToCartButton = styled.button`
  width:50%;
  height: 3rem;
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color:white;
  }
`