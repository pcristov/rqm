import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div id="quote-box">
      	<div id="text"></div>
      	<div id="author"></div>
  		<button id="new-quote">New quote</button>
  		<a
  			id="tweet-quote"
  			href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
  			target="_blank"
  		>
  			Tweet
  		</a>
      </div>
    </div>
  );
}

export default App;
