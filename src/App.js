import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Sandwitches = () => <h3>Sandwitches</h3>
const Tacos = ({routes}) => (
  <div>
    <ul>
      <li>
        <Link to="/tacos/bus">Bus</Link>
      </li>
      <li>
        <Link to="/tacos/cart">Cart</Link>
      </li>
    </ul>
    {routes.map((route, index) => (
        <RouteWithSubRoutes key={index} {...route} />
      )
    )}
  </div>
)
const Cart = () => <h3>Cart</h3>
const Bus = () => <h3>Bus</h3>

const routes = [
  {
    path: "/sandwiches",
    exact: false,
    component: Sandwitches
  },
  {
    path: "/tacos",
    exact: false,
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        exact: true,
        component: Bus
      },
      {
        path: "/tacos/cart",
        exact: true,
        component: Cart
      }
    ]
  }
]

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => {
      console.debug("props in render of RouteWithSubRoutes", props);
      return (
        // pass the sub-routes down in order to keep nesting
        <route.component {...props} routes={route.routes} />
      )}}
  />
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/tacos">Tacos</Link>
        </li>

        <li>
          <Link to="/sandwiches">Sandwiches</Link>
        </li>
      </ul>

      {routes.map((route, index) => (
        <RouteWithSubRoutes key={index} {...route} />
      ))}
    </div>
  </Router>
)

export default App;


