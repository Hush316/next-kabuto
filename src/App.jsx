import { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h2>NAV MENUS</h2>
        <ul>
          <li>
            <Link to="/">AllMeetupsPage</Link>
          </li>
          <li>
            <Link to="/favorites">FavoritesPage</Link>
          </li>
          <li>
            <Link to="/new-meetup">NewMeetups</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback="loading">
        <div className="main">
          {useRoutes(routes)}
        </div>
      </Suspense>
    </div>
  )
}

export default App
