import PropTypes from 'prop-types';
import randomColor from '../../utils/randomColor';
import {
  StyledStatistics,
  Title,
  StatList,
  StatItem,
  Percent,
} from './Statistics.styled';

export default function Statistics({ data, title }) {
  console.log(data);
  return (
    <StyledStatistics>
      {!!title ? <Title>{title}</Title> : <Title>Upload stats</Title>}
      <StatList>
        {data.map(stat => (
          <StatItem
            key={stat.id}
            style={{
              backgroundColor: randomColor(),
            }}
            length={data.length}
          >
            <span>{stat.label}</span>
            <Percent>{stat.percentage}</Percent>
          </StatItem>
        ))}
      </StatList>
    </StyledStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
