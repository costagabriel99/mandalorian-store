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
    fetcher()
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
  background-color: ${(props) => props.theme.white};
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
