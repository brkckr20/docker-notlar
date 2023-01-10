import Header from './components/Header'
import Home from './pages/Home'
import { Route, Switch } from 'react-router-dom'
import Templates from './pages/Templates'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/templates">
          <Templates />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
