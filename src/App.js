import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const ParamsDemo = ({location}) => {
  let params = new URLSearchParams(location.search)

  return (
    <div>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to={{pathname: "/accounts", search: "?name=netflix"}}>Netflix</Link>
        </li>
        <li>
          <Link to={{pathname: "/accounts", search: "?name=Cosmote"}}>Cosmote TV</Link>
        </li>
      </ul>

      <Route render={() => <h3>name in url params is {params.get("name")}</h3>} path="/accounts"/>
    </div>
  )
}

const App = () => (
  <Router>
    <Route component={ParamsDemo}/>
  </Router>
)

export default App;