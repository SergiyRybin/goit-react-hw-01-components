import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={s.item}>
            <span className={s.label}> {label} </span>
            <span className={s.percentage}> {percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;

Statistics.propType = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
