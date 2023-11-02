import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.Trueblack};
  color: #fff;
  padding: 20px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 380px) {
    width: 100vh;
  }
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  min-width: 360px;
  flex: 1;
`

const Nav = styled.nav`
  flex: 1;
  min-width: 300px;
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
      <Title>Mandalarian Store</Title>
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
