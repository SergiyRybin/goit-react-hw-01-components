import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend}>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <li key={id} className={style.item}>
          <span
            className={style.status}
            style={{ backgroundColor: isOnline && 'green' }}
          />
          <img className={style.avatar} src={avatar} alt={name} width="48" />
          <p className={style.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnlin: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ),
};
