import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
         Link,
         Prompt} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Form</Link>
          </li>

          <li>
            <Link to="/one">One</Link>
          </li>

          <li>
            <Link to="/two">Two</Link>
          </li>
        </ul>

        <Route path="/" exact component={Form} />
        <Route path="/one" render={() => <h3>One</h3>} />
        <Route path="/two" render={() => <h3>Two</h3>} />
      </div>
    </Router>
  )
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBlocking: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    if (value.trim() === '') {
      console.debug('nothing has been typed. we can leave')
      if (this.state.isBlocking)
        this.setState({isBlocking: false})
    }
    else {
      if (!this.state.isBlocking)
        this.setState({isBlocking: true})
    }
  }

  render() {
    let isBlocking = this.state.isBlocking
    return (
      <form>
        <Prompt when={isBlocking}
                message={(location, action) => `Are you sure that you want to go to ${location.pathname}. Action: ${action}`}/>
        <input placeholder="Give your email" onChange={this.handleChange}/>
      </form>
    )
  }
}

export default App;