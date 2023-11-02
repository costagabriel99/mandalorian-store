import Image from 'next/image'
import styled from 'styled-components'

const Stars = styled.div`
  span {
    font-size: 15px;
    font-weight: 700;
  }
`

export default function Rating({ rating }) {
  const stars = (r) => {
    if (r === 0) '/rating/0.png'
    else if (r >= 0.1 && r <= 0.9) '/rating/0.5.png'
    else if (r >= 1 && r <= 1.2) '/rating/1.png'
    else if (r >= 1.3 && r <= 1.9) '/rating/1.5.png'
    else if (r >= 2 && r <= 2.2) '/rating/2.png'
    else if (r >= 2.3 && r <= 2.9) '/rating/2.5.png'
    else if (r >= 3 && r <= 3.2) '/rating/3.png'
    else if (r >= 3.3 && r <= 3.9) '/rating/3.5.png'
    else if (r >= 4 && r <= 4.2) '/rating/4.png'
    else if (r >= 4.3 && r <= 4.9) '/rating/4.5.png'
    else '/rating/5.png'
  }

  return (
    <Stars>
      <span>{rating}</span>
      <Image src={stars(rating)} alt={rating} />
    </Stars>
  )
}
