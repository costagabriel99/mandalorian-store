import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.Trueblack};
  opacity: ${(props) => (props.loading ? 1 : 0)};
  transition: opacity 1s ease-in-out;

  p {
    color: #fff;
  }
`

const LoadingTitle = styled.h1`
  color: #fff;
`

export default function LoadingPage({ loading }) {
  return (
    <LoadingContainer loading={loading}>
      <LoadingTitle>Bem vindo Viajante Intergalático</LoadingTitle>
      <p>
        Nossos servidores espaciais estão carregando os melhores equipamentos disponíveis no
        universo...
      </p>
    </LoadingContainer>
  )
}
