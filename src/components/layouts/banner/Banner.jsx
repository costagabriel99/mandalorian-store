import styled from 'styled-components'

export default function StyledBanner() {
  return (
    <Banner>
      <BannerTitle>Equipamentos de toda Galáxia </BannerTitle>
      <BannerText>Na palma da sua mão</BannerText>
    </Banner>
  )
}

const Banner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.Trueblack};
  background-image: url('/banner.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  padding: 50px;
  height: calc(100vh - 40px);

  @media (max-width: 380px) {
    width: 100vh;
  }
`

const BannerTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.Awhite};
`

const BannerText = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.primary};
`
