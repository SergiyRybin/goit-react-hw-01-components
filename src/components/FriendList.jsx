import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, name, isOnline, avatar }) => (
        <li key={id} className="item">
          <span
            className={'status' + (isOnline ? ' onLine' : ' offLine')}
          ></span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnlin: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
