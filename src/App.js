import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const History = () => <h1>My History</h1>
const About = (props) => <h1>About {props.extra}</h1>
const Contact = () => <h1>Contact</h1>
const Home = () => <h1>Home</h1>


function App() {
  const someVariable = 'peter';

  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route
            path="/about"
            render={props => <About {...props} extra={someVariable} />}
          />

          <Route component={() => <h1>404</h1>}/>
        </Switch>

    </div>
  );
}

export default App;
