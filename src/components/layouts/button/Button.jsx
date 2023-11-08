import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  border: none;
  margin-top: 15px;
  background-color: ${(props) => (props.$available ? props.theme.Trueblack : props.theme.disable)};
  color: ${(props) => props.theme.white};
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: ${(props) => (props.$available ? 'pointer' : 'default')};

  :hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => (props.$available ? props.theme.primary : props.theme.disable)};
  }
`
