import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from './plugins/axios'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import Home from './pages/Home'
import Work from './pages/Work'

function LoadWorkData() {
  axios
    .get('/databases/(default)/documents/work')
    .then((e) => {
      console.log('data', e)
    })
    .catch((err) => {
      console.error(err)
    })
}
const App: React.FC = () => {
  useEffect(() => {
    LoadWorkData()
  }, [])
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
        </Switch>
      </main>
      <footer>
        <p className="text-center">Copyright © 2022 Tom Yuan Website</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
