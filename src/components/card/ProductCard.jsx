import styled from 'styled-components'

import Stars from '../layouts/rating/Stars'
import { Button } from '../../../pages'

export default function ProductCard({ img, title, price, desc, availible, rating }) {
  return (
    <Product>
      <ImageContainer>
        <ProductImage src={img} alt={title} />
      </ImageContainer>
      <ProductTitle>{title}</ProductTitle>
      <Stars rating={rating} />
      <ProductPrice>${price}</ProductPrice>
      <Description>{desc}</Description>
      {availible ? (
        <Button href="#" className="btn">
          Add to Cart
        </Button>
      ) : (
        <Button disabled="true">Não disponível</Button>
      )}
    </Product>
  )
}

ProductCard.defaultProps = {
  img: 'https://mandalorian-store.netlify.app/images/blaster-e-11.webp',
  title: 'Blaster',
  price: '300',
  desc: 'Blaster de uso padrão dos Stormtroopers do Império. Prático e confiável.',
  availible: false,
  rating: '4.7'
}

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 20px 0 20px 0;
  text-align: center;
  margin: 20px;
  flex-wrap: wrap;
`
const ImageContainer = styled.div`
  width: 210px;
  height: 210px;
  display: flex;
  align-items: end;
  justify-content: center;

  @media (min-width: 1170px) {
    align-items: center;
  }
`

const ProductImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 10px;
`

const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`

const ProductPrice = styled.p`
  font-size: 22px;
  margin: 10px 0 10px 0;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 14px;
  margin: 10px;
  width: 200px;
  height: 50px;
`
