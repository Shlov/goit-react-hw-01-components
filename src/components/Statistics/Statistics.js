import {Section, Item, Title, List, Label, Percentage} from './Statistics.style';

export const Statistics = ({statistics}) => (
<Section>
  <Title>Upload stats</Title>
  <List>
    {statistics.map(statistic => (
      <Item key={statistic.id}>
        <Label>{statistic.label}</Label>
        <Percentage>{statistic.percentage}%</Percentage>
      </Item>
    ))}
  </List>
</Section>
)