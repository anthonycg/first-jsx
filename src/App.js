import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person'
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>LA LA Land</h1>
      </div>
      <Person />
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
          <li>Learn React</li>
          <li>Go to coffee shop</li>
          <li>research how to properly use github</li>
          <li>review DOM events, query selector</li>
          <li>I find it interesting that the default viewport height is 100 on the App-header class in the App.css file</li>
      </ul>
    </div>
  );
}

export default App;
