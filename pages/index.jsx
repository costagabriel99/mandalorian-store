import styled from 'styled-components'

import Navbar from '../src/components/layouts/navbar/Navbar'
import ProductCard from '../src/components/card/ProductCard'
import Loading from '../src/components/layouts/loading/Loading'

import { useEffect, useState } from 'react'
import StyledFooter from '../src/components/layouts/footer/Footer'
import StyledBanner from '../src/components/layouts/banner/Banner'

function HomePage() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const fetcher = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api?url=equipments')
      if (response.status === 200) {
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } else {
        throw new Error('Status de resposta inesperado:', response.status)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetcher()
    }, 4000)
  }, [])

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <AppContainer>
          <Navbar />
          <StyledBanner />
          <FeaturedProductsTitle>Equipamentos</FeaturedProductsTitle>
          <FeaturedProducts>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                img={product.image}
                title={product.name}
                desc={product.description}
                available={product.isAvailable}
                rating={product.rating}
              />
            ))}
          </FeaturedProducts>
          <StyledFooter />
        </AppContainer>
      )}
    </>
  )
}

const AppContainer = styled.div`
  text-align: center;
  background-color: #f1f1f1;
`

export const Button = styled.button`
  display: inline-block;
  border: none;
  margin-top: 15px;
  background-color: ${(props) => (props.$available ? props.theme.Trueblack : props.theme.disable)};
  color: ${(props) => props.theme.white};
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: ${(props) => (props.$available ? 'pointer' : 'default')};

  :hover {
    color: ${(props) => props.theme.primaryHover};
    background-color: ${(props) => (props.$available ? props.theme.primary : props.theme.disable)};
  }
`

const FeaturedProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  @media (max-width: 380px) {
    width: 100vh;
  }
`

const FeaturedProductsTitle = styled.h2`
  font-size: 30px;
  margin-top: 50px;

  @media (max-width: 380px) {
    width: 100vh;
  }
`

export default HomePage
