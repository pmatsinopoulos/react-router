import React from 'react';
import { BrowserRouter as Router,
         Route,
         Link} from 'react-router-dom';

const App = () => (
    <Router>
      <h1>Custom Link Example</h1>
      <OldSchoolMenuLink to="/about" label="About"/>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>

      <hr/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/" component={Home}/>
    </Router>
)

const OldSchoolMenuLink = ({activeOnlyWhenExact, to, label}) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({match}) => {
      console.debug('match', match)
      return (
        <div className={match ? "active" : ""}>
          {match ? "> " : ""}
          <Link to={to}>{label}</Link>
        </div>
      )
    }}
  />
)

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

export default App;