import PropTypes from 'prop-types';
import {Section, Item, Title, List, Label, Percentage} from './Statistics.style';

export const Statistics = ({title, stats}) => (
<Section>
  {title && <Title>{title}</Title>}
  <List>
    {stats.map(stat => (
      <Item key={stat.id}>
        <Label>{stat.label}</Label>
        <Percentage>{stat.percentage}%</Percentage>
      </Item>
    ))}
  </List>
</Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
