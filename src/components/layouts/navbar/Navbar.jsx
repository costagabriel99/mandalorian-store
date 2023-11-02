import styled from 'styled-components'

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
`

export default function Navbar() {
  return (
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
  )
}
