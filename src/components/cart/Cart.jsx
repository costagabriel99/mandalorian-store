import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const CartIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: ${(props) => props.theme.white};

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
