import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
];

const findPeep = peepId => PEEPS.find(peep => peep.id == peepId)

const App = () => (
  <Router>
    <Person match={{params: {id: 0}, url: ""}}/>
  </Router>
)

const Person = ({match}) => {
  console.debug('Match', match)
  let person = findPeep(match.params.id)

  return (
    <div>
      <h3>{person.name}'s Friends</h3>
      <ul>
        {person.friends.map((friendId, index) => {
          return (
            <li key={friendId}>
              <Link to={`${match.url}/${friendId}`} >{findPeep(friendId).name}</Link>
            </li>
          )
        })}
      </ul>
      <Route component={Person} path={`${match.url}/:id`} />
    </div>
  )
}
export default App;