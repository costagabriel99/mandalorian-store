import styled from 'styled-components'

export default function StyledFooter() {
  return (
    <Footer>
      <p>
        &copy; 2023 <a href="#Home">Mandalorian Store</a>. All rights reserved.
      </p>
    </Footer>
  )
}

const Footer = styled.footer`
  background-color: ${(props) => props.theme.Trueblack};
  color: #fff;
  text-align: center;
  padding: 20px;

  @media (max-width: 380px) {
    width: 100vh;
  }
`
