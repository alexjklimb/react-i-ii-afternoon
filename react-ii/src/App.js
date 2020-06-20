import React from 'react';
import './App.css';
import Header from './Components/Header';
import UserInfo from './Components/UserInfo';
import UserInfoControls from './Components/UserInfoControls'
function App() {
  return (
    <div className="App">
      <Header/>
      <UserInfo/>
      <UserInfoControls/>
    </div>
  );
}
export default App;
