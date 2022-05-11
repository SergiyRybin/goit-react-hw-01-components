import Profile from './Profile';
import user from '../path/user';
import Statistics from './Statistics';
import data from '../path/data';
import Friendlist from './FriendList';
import friends from '../path/friends'



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
      </div>
      <div>
        <Friendlist friends ={friends}/>
      </div>
    </div>

    //
  );
}
