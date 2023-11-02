import styled from 'styled-components'

import Stars from '../layouts/rating/Stars'
import { Button } from '../../../pages'

export default function ProductCard({ img, title, price, desc, availible, rating }) {
  return (
    <Product>
      <ProductImage src={img} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <Stars rating={rating} />
      <ProductPrice>{price}</ProductPrice>
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
  display: inline-block;
  text-align: center;
  margin: 0 20px;
`

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`

const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`

const ProductPrice = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`

const Description = styled.p`
  font-size: 14px;
  margin: 5px;
`
