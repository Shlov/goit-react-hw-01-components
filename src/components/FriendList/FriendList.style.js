import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  padding: 0;
  gap: 16px;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  border: 2px solid rgb(197,219,239);
  /* width: 180px; */
  padding: 12px;
  background-color: aliceblue;

`;

export const Status = styled.span`
  display: block;
  margin: 12px;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  border: 4px solid ${props => props.isOnline ? 'green' : 'red'};
`;

export const Avatar = styled.img`

`;

export const Name = styled.span`
  font-size: 32px;
  font-weight: 500;
  padding: 12px;
`;