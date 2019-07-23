import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/about">About</Link>
  </div>
)
const About = () => (
  <div>
    <h1>About</h1>
    <Link to="/">Home</Link>
  </div>
)


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route
            path="/about"
            component={About} />}
          />

          <Route component={() => <h1>404</h1>}/>
        </Switch>

    </div>
  );
}

export default App;
