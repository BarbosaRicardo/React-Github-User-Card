import React from 'react';
import Followers from './components/Followers.js';
import Profile from './components/Profile.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Self Profile</h1>
        <Profile />
      <h1>Followers</h1>
        <Followers />
    </div>
  );
}

export default App;
