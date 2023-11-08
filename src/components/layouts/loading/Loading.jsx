import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.Trueblack};
  opacity: ${(props) => (props.loading ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  gap: 50px;

  p {
    color: #fff;
  }
`

const LoadingTitle = styled.h1`
  color: #fff;
`

const Icon = styled.img`
  width: 80px;
  height: 80px;
`

export default function LoadingPage({ loading }) {
  return (
    <LoadingContainer loading={loading}>
      <LoadingTitle>Bem vindo Viajante Intergalático</LoadingTitle>
      <p>
        Nossos servidores espaciais estão carregando os melhores equipamentos disponíveis no
        universo...
      </p>
      <Icon src="/loading.gif" />
    </LoadingContainer>
  )
}
