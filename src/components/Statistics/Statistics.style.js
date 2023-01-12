import styled from 'styled-components';

export const Section = styled.section`
  width: 348px;
  background-color: aliceblue;

`;

export const Title = styled.h2`
  padding: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px;
  text-align: center;
  border: 2px solid rgb(197, 219, 239);
`;

export const Label = styled.span`
  font-weight: 500;
  margin-bottom: 8px;
  color: darkmagenta;
`;

export const Percentage = styled.span`
  font-weight: 700;
  color: tomato;
`;
