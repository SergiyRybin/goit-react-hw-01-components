import PropTypes from 'prop-types';
import s from './Transaction.module.css'
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ amount, currency, id, type }, index) => (
        <tbody key={id}>
          <tr style={{ backgroundColor: index % 2 === 0 && 'lightgrey' }}>
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
  type: PropTypes.string.isRequired,
};
