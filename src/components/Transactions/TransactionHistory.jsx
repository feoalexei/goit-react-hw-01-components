import PropTypes from 'prop-types';
import styled from 'styled-components';

import Transaction from './Transaction';

export default function TransHistory({ data }) {
  return (
    <StyledTransactions>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </StyledTransactions>
  );
}

const StyledTransactions = styled.table`
  table-layout: fixed;
  width: 50%;
  min-width: 300px;
  border-collapse: collapse;
  border: 1px solid darkgray;
  text-align: center;
  & th {
    border: 1px solid darkgrey;
    padding: ${p => p.theme.space[3]}px;
    color: #fff;
    background-color: #0cb0d9;
  }
  & td {
    border: 1px solid darkgrey;
    padding: ${p => p.theme.space[3]}px;
  }
`;

TransHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
