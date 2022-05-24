import Profile from '../Profile/Profile';
import user from '../../data/user';
import Statistics from '../Statistics/Statistics';
import data from '../../data/data';
import Friendlist from '../FriendList/FriendList';
import friends from '../../data/friends';
import TransactionHistory from '../Transaction/TransactionHistory';
import transactions from '../../data/transactions';

export default function App() {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>

    //
  );
}
