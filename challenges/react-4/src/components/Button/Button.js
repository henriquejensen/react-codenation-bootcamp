//TODO create button
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  color: ${props => props.color || 'white'}
  background-color: ${props => props.background || 'grey'}
  padding: 5px;
  border-radius: 3px;
  font-size: 16px
`;

export default Button;
