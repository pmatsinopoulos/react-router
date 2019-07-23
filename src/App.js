import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <NavLink to="/about" activeClassName="foo">About</NavLink><br/>
    <Link to="/go_back">Go Back</Link>
  </div>
)
const About = () => (
  <div>
    <h1>About</h1>
    <NavLink to="/" activeClassName="foo">Home</NavLink><br/>
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
