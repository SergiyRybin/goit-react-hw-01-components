import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import user from './path/user.json';

// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(cardUsr, document.querySelector('#root'));

function Profile({ username, tag, location, avatar, stats }) {
 
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} class="avatar" width="200" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity"> {stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity"> {stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

createRoot(document.querySelector('#root')).render(
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
);
