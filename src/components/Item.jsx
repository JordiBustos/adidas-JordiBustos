import styled from 'styled-components';

const Item = ({ title, thumbnail, price, available_quantity }) => {
  return (
    <Figure>
      <img src={thumbnail} alt={title} />
      <figcaption> <Price>${price}</Price> <Title>{title}</Title> <Title><b>Stock: {available_quantity}</b></Title></figcaption>
    </Figure>
  );
}

const Figure = styled.figure`
  padding:0;
  margin:0 0 3% 0;
  position: relative;

  &:hover {
    border: 2px solid black;
  }

  img {
    width: 100%;
  }
`;

const Price = styled.p`
  margin: 0;
  padding: .5rem .5rem;
  font-size:.8rem;
  position: absolute;
  bottom:17%;
  left:1%;
  background-color: white;
  color: black;
  transition: .2s;

  &:hover {
    bottom:20%;
  }
`;

const Title = styled.h4`
  margin:0;
  padding:0 0 .5rem 0;
  font-size:.9rem;
  color: black;
  font-weight:400
`;

export default Item;