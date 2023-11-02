import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
`

const ItemName = styled.div`
  flex: 1;
  font-weight: bold;
`

const ItemPrice = styled.div`
  margin-left: 16px;
`

const Total = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
`

const Cart = ({ items }) => {
  const calculateTotal = () => {
    let total = 0
    items.forEach((item) => {
      total += item.price
    })
    return total.toFixed(2)
  }

  return (
    <Container>
      <Title>Cart</Title>
      {items.map((item) => (
        <CartItem key={item.id}>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
        </CartItem>
      ))}
      <Total>Total: ${calculateTotal()}</Total>
    </Container>
  )
}

export default Cart
