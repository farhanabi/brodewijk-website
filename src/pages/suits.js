import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <a>
          <img src={require('./img/Brodewijk-white.png')}/> 
        </a>
        <div className="Nav">
          <a href="/suits">Suits</a>
          <a href="/shirts">Shirts</a>
          <a href="/pants">Pants</a>
          <a href="/outerwear">Outerwear</a>
        </div>    
      </div>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
