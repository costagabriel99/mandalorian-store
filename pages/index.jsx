import styled from 'styled-components'

function HomePage() { //em produtos preciso fazer um map
  return (
    <AppContainer>
      <Header>
        <Title>Welcome to My Web Store</Title>
        <Nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </Nav>
      </Header>
      <Banner>
        <BannerTitle>Shop the Latest Trends</BannerTitle>
        <BannerText>Discover a wide range of products that suit your style and needs.</BannerText>
        <Button href="#" className="btn">
          Shop Now
        </Button>
      </Banner>
      <FeaturedProducts>
        <FeaturedProductsTitle>Featured Products</FeaturedProductsTitle>
        <Product>
          <ProductImage src="product1.jpg" alt="Product 1" />
          <ProductTitle>Product 1</ProductTitle>
          <ProductPrice>$19.99</ProductPrice>
          <Button href="#" className="btn">
            Add to Cart
          </Button>
        </Product>
        <Product>
          <ProductImage src="product2.jpg" alt="Product 2" />
          <ProductTitle>Product 2</ProductTitle>
          <ProductPrice>$24.99</ProductPrice>
          <Button href="#" className="btn">
            Add to Cart
          </Button>
        </Product>
        <Product>
          <ProductImage src="product3.jpg" alt="Product 3" />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$14.99</ProductPrice>
          <Button href="#" className="btn">
            Add to Cart
          </Button>
        </Product>
      </FeaturedProducts>
      <Newsletter>
        <NewsletterTitle>Subscribe to Our Newsletter</NewsletterTitle>
        <NewsletterForm>
          <input type="email" placeholder="Enter your email address" />
          <Button type="submit" className="btn">
            Subscribe
          </Button>
        </NewsletterForm>
      </Newsletter>
      <Footer>
        <p>&copy; 2022 My Web Store. All rights reserved.</p>
      </Footer>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f1f1f1;
`

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`

const Nav = styled.nav`
  ul {
    list-style-type: none;
  }

  ul li {
    display: inline-block;
    margin-right: 10px;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
    padding: 5px;
  }
`

const Banner = styled.section`
  background-color: #fff;
  text-align: center;
  padding: 50px;
`

const BannerTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
`

const BannerText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`

const Button = styled.a`
  display: inline-block;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
`

const FeaturedProducts = styled.section`
  text-align: center;
  padding: 50px;
`

const FeaturedProductsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

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

const Newsletter = styled.section`
  background-color: #f9f9f9;
  text-align: center;
  padding: 50px;
`

const NewsletterTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

const NewsletterForm = styled.form`
  input[type='email'] {
    padding: 10px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 10px;
  }

  .btn {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
`

export default HomePage

/*
In this example, we have a Container component that serves as the main container for the cart component. It uses flexbox to center its content vertically and horizontally (display: flex; align-items: center; justify-content: center;) and adds padding to give it some spacing.

Inside the Container, we have a Title component for the cart heading. Below that, we have a CartItem component for each item in the cart. These components display the item name and price using ItemName and ItemPrice components, respectively. These components are styled using styled-components with appropriate font sizes, margins, padding, borders, and other styles.

The Cart component receives an items prop, which is an array of items in the cart. It maps over the items array and renders a CartItem component for each item, displaying its name and price. It also calculates and displays the total price of all the items in the cart using the calculateTotal function.

Finally, the Cart component is exported as the default export. You can import and use this component in your main App component or any other relevant components to display the cart in your web store.
*/