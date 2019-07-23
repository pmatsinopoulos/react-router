import React, { Component } from 'react';
import { BrowserRouter as Router,
         Link,
         Route,
         Redirect,
         withRouter } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public-page">Public Page</Link>
          </li>

          <li>
            <Link to="/protected-page">Protected Page</Link>
          </li>

          <Route path="/public-page" component={Public}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/protected-page" component={Protected}/>
        </ul>
      </div>
    </Router>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({match, location, history}) => {
    console.debug('History', history)
    console.dir(history)

    console.debug('Location', location)
    console.dir(location)

    console.debug('Match', match)
    console.dir(match)

    return fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button onClick={() => {fakeAuth.signout(() => history.push('/'))}}>
          Sign Out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
  }
)

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      fakeAuth.isAuthenticated ? (
        <component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {from: props.location}
          }}
          />
      )
    )}
  />
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends Component {
  state = {redirectToReferrer: false}
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({redirectToReferrer: true})
    })
  }

  render() {
    let { from } = this.props.location.state || {from: {pathname: "/"}};
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>you must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log In</button>
      </div>
    )
  }
}
export default App;