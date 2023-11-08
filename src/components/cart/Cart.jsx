import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

const Container = styled.div`
  position: relative;
  align-items: center;
  padding-right: 20px;

  @media (max-width: 500px) {
    padding: 0;
  }
`

const CartIcon = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: ${(props) => props.theme.white};
  position: absolute;
  right: 20px;
  bottom: -10px;

  :hover {
    color: ${(props) => props.theme.primary};
    cursor: pointer;
  }
`
function Cart() {
  return (
    <Container>
      <CartIcon>
        <FaShoppingCart />
      </CartIcon>
    </Container>
  )
}

export default Cart
