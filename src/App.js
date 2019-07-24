import React from 'react';
import { BrowserRouter as Router,
         Route,
         Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    exact: false,
    sidebar: () => <div>Bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    exact: false,
    sidebar: () => <div>Show laces!</div>,
    main: () => <h2>Show laces</h2>
  }
]

const App = () => (
  <Router>
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bubblegum">BubbleGum</Link>
          </li>
          <li>
            <Link to="/shoelaces">Shoe Laces</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
         ))}
      </div>

      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            component={route.main}
            path={route.path}
            exact={route.exact}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default App;