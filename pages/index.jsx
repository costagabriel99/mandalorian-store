import styled from 'styled-components'

import Navbar from '../src/components/layouts/navbar/Navbar'
import ProductCard from '../src/components/card/ProductCard'
import Loading from '../src/components/layouts/loading/Loading'

import { useEffect, useState } from 'react'

function HomePage() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  /* const fetcher = async () => {
    try {
      setLoading(true)
      const response = await axios.get()
      if (response.status === 200) {
        console.log('resposta axios:', response)
        setProducts(response.data)
        setLoading(false)
      } else {
        console.error('Status de resposta inesperado:', response.status)
      }
    } catch (error) {
      console.error(error)
    }
  } */

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
    }, 2000)
  }, [])

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <AppContainer>
          <Navbar />
          <Banner>
            <BannerTitle>Shop the Latest Trends</BannerTitle>
            <BannerText>
              Discover a wide range of products that suit your style and needs.
            </BannerText>
            <Button href="#" className="btn">
              Shop Now
            </Button>
          </Banner>
          <FeaturedProductsTitle>Featured Products</FeaturedProductsTitle>
          <FeaturedProducts>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                img={product.image}
                title={product.name}
                desc={product.description}
                availible={product.isAvailable}
                rating={product.rating}
              />
            ))}
          </FeaturedProducts>
          <Footer>
            <p>&copy; 2022 My Web Store. All rights reserved.</p>
          </Footer>
        </AppContainer>
      )}
    </>
  )
}

const AppContainer = styled.div`
  text-align: center;
  background-color: #f1f1f1;
`

const Banner = styled.section`
  background-color: #fff;
  text-align: center;
  padding: 50px;

  @media (max-width: 380px) {
    width: 100vh;
  }
`

const BannerTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
`

const BannerText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`

export const Button = styled.button`
  display: inline-block;
  border: none;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;

  :disabled {
    background-color: ${(props) => props.theme.grey};
  }

  :hover {
    color: ${(props) => props.theme.primaryHover};
    background-color: ${(props) => props.theme.primary};
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
  font-size: 24px;
  margin-top: 50px;

  @media (max-width: 380px) {
    width: 100vh;
  }
`

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;

  @media (max-width: 380px) {
    width: 100vh;
  }
`

export default HomePage

/*
In this example, we have a Container component that serves as the main container for the cart component. It uses flexbox to center its content vertically and horizontally (display: flex; align-items: center; justify-content: center;) and adds padding to give it some spacing.

Inside the Container, we have a Title component for the cart heading. Below that, we have a CartItem component for each item in the cart. These components display the item name and price using ItemName and ItemPrice components, respectively. These components are styled using styled-components with appropriate font sizes, margins, padding, borders, and other styles.

The Cart component receives an items prop, which is an array of items in the cart. It maps over the items array and renders a CartItem component for each item, displaying its name and price. It also calculates and displays the total price of all the items in the cart using the calculateTotal function.

Finally, the Cart component is exported as the default export. You can import and use this component in your main App component or any other relevant components to display the cart in your web store.
*/
