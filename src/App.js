import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const History = () => <h1>My History</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>


function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/history" component={History}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={() => <h1>404</h1>}/>
        </Switch>

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
