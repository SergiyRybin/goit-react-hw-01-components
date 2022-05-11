import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ amount, currency, id, type }) => (
        <tbody key={id}>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default TransactionHistory;

TransactionHistory.prototype = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
type: PropTypes.string.isRequired
};
