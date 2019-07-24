import React from 'react';
import {BrowserRouter as Router,
        Route,
        Switch,
        Link} from 'react-router-dom';

class ModalSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.previousLocation = null
  }

  componentWillUpdate(nextProps, nextState) {
    console.debug('props', this.props)
    console.debug('nextProps', nextProps)
    console.debug('nextState', nextState)

    let {location} = this.props

    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let {location} = this.props
    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route component={Home} path="/" exact />
          <Route component={Gallery} path="/gallery" />
          <Route component={ImageView} path="/img/:id" />
        </Switch>
        {isModal ? <Route component={Modal} path="/img/:id"/> : null}
      </div>
    )
  }
}

const IMAGES = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" }
]

const Thumbnail = ({color}) => (
  <div style={{
    width: 50,
    height: 50,
    background: color
  }}/>
)

const Image = ({color}) => (
  <div
    style={{
      width: "100%",
      height: 400,
      background: color
    }}
  />
)

const Home = () => (
  <div>
    <Link to="/gallery">Visit the Gallery</Link>
    <h2>Featured Images</h2>
    <ul>
      <li>
        <Link to="/img/2">Tomato</Link>
      </li>
      <li>
        <Link to="/img/4">Crimson</Link>
      </li>
    </ul>
  </div>
)

const Gallery = ({match}) => (
  <div>
    {IMAGES.map(i => (
      <Link key={i.id} to={{
        pathname: `/img/${i.id}`,
        state: {modal: true}
      }}>
        <Thumbnail color={i.color}/>
        <p>{i.title}</p>
      </Link>
    ))}
  </div>
)

const ImageView = ({match}) => (
  <div>image {match.params.id}</div>
)

const Modal = ({match, history}) => {
  let image = IMAGES[parseInt(match.params.id, 10)]

  if (!image) return null;

  let back = e => {
    e.stopPropagation()
    history.goBack()
  }

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div className="modal"
           style={{
             position: "absolute",
             background: "#fff",
             top: 25,
             left: "10%",
             right: "10%",
             padding: 15,
             border: "2px solid #444"
           }}>
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>Close</button>
      </div>
    </div>
  )
}

const App = () => (
  <Router>
    <Route component={ModalSwitch}/>
  </Router>
)

export default App;