import styled from "styled-components";

export const Table = styled.table`
  background-color: aliceblue;
  width: 1000px;
  text-align: center;
  font-size: 24px;
`

export const TableHeader = styled.thead`
  background-color: rgb(32 133 225);
  color: white;
  font-weight: 500;
`;

export const TableBody = styled.thead`

`;

export const Line = styled.tr`
  background-color: ${props => (props.string % 2) ? 'aliceblue' : 'rgb(146 203 255)'};
`;

export const CellHeader = styled.th`
  padding: 20px 8px;
`;

export const CellBody = styled.th`
  padding: 8px;
`;