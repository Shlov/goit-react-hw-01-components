import {Table, TableHeader, TableBody, Line, CellHeader, CellBody} from './TransactionHistory.style';

export const TransactionHistory = ({transactions}) => (
<Table>
  <TableHeader>
    <tr>
      <CellHeader>Type</CellHeader>
      <CellHeader>Amount</CellHeader>
      <CellHeader>Currency</CellHeader>
    </tr>
  </TableHeader>
  <TableBody>
    {transactions.map(({id, type, amount, currency}, idx) => (
      <Line key = {id} string = {idx + 1}>
        <CellBody>{type}</CellBody>
        <CellBody>{amount}</CellBody>
        <CellBody>{currency}</CellBody>
      </Line>
    ))}
  </TableBody>
</Table>
);

