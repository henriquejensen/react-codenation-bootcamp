import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  width: 450px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h1`
  font-size: 20px;
`;

const CardContent = styled.div`
  padding: 3px 15px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const CardDescription = styled.p`
  padding: 3px 15px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

const CardImage = styled.div`
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  width: 100%;
  height: 300px;
`;

export { Card, CardTitle, CardContent, CardDescription, CardImage };
