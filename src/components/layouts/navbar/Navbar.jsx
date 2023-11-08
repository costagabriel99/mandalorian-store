import styled from 'styled-components'

import Cart from '../../cart/Cart'

const Header = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.Trueblack};
  padding: 20px 2%;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;

  @media (max-width: 380px) {
    width: 100vh;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    flex-wrap: nowrap;
    justify-content: space-around;
  }
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  min-width: 360px;
  color: ${(props) => props.theme.white};
`

const Nav = styled.nav`
  min-width: 30px;
  ul {
    list-style-type: none;
  }

  ul li {
    display: inline-block;
    margin-right: 10px;
  }
`
const PrimaryColor = styled.span`
  color: ${({ theme }) => theme.primary};
`

export default function Navbar() {
  return (
    <Header>
      <Title>
        Mandalarian <PrimaryColor>Store</PrimaryColor>
      </Title>
      <Nav id="Home">
        <Cart />
      </Nav>
    </Header>
  )
}
