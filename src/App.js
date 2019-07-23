import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/about">About</Link><br/>
    <Link to="/go_back">Go Back</Link>
  </div>
)
const About = () => (
  <div>
    <h1>About</h1>
    <Link to="/">Home</Link><br/>
    <Link to="/go_back">Go Back</Link>
  </div>
)
const GoBack = () => <Redirect to="/"/>

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route
            path="/about"
            component={About} />}
          />
          <Route path="/go_back" component={GoBack}/>

          <Route component={() => <h1>404</h1>}/>
        </Switch>

    </div>
  );
}

export default App;
