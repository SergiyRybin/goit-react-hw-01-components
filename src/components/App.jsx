import Profile from './Profile';
import user from '../path/user';
import Statistics from './Statistics';
import data from '../path/data';

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
      <div>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>
    </div>

    //
  );
}
