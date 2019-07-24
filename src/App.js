import React from 'react';
import { BrowserRouter as Router,
         Route,
         Redirect,
         Switch,
         Link} from 'react-router-dom';

const Home = () => (
  <p>
    A <code>&lt;Switch&gt;</code> renders the first child <code>&lt;Route&gt;</code>{" "}
    that matches. A <code>&lt;Route&gt;</code> with no <code>path</code> always
    matches.
  </p>
)

const App = () => (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/old-match">Old Match. To be redirected</Link>
      </li>

      <li>
        <Link to="/will-match">Will Match</Link>
      </li>

      <li>
        <Link to="/will-not-match">Will not match</Link>
      </li>
    </ul>

    <Switch>
      <Route component={Home} path="/" exact/>
      <Redirect from="/old-match" to="/will-match" exact/>
      <Route component={WillMatch} path="/will-match" exact />
      <Route component={NoMatch} />
    </Switch>
  </Router>
)

const WillMatch = () => <h3>Matched!</h3>
const NoMatch = ({location}) => (
  <h3>No match for {location.pathname}</h3>
)

export default App;