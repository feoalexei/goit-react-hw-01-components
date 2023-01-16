import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Transaction({ type, amount, currency }) {
  return (
    <StyledTransaction>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </StyledTransaction>
  );
}

const StyledTransaction = styled.tr`
  background-color: ${p => p.theme.colors.background};
  &:nth-child(even) td {
    background-color: #f0f3fb;
  }
`;

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
